import { WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors'
import express from 'express';
import pool from './src/database/db_Mysql';
import userRoutes from './src/users/infrastructure/UserRoutes';
import patientRoutes from './src/patient/infrastructure/PatientRoutes'; 
import medicineRoutes from './src/medicine/infrastructure/medicineRoutes';
import doseRouter from './src/dose/infrastructure/doseRouter'
import { sendDoseNotifications } from "./src/notifications/applications/sendDoseNotification" ;
import { WebSocketNotifier } from "./src/notifications/infraestructure/WebRouter";
import { MySQLDoseRepository } from "./src/notifications/infraestructure/mysql_dose";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.json());
app.use(cors({
origin: ['http://localhost:5270'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))


app.use('/api/user', userRoutes);
app.use('/api/patient', patientRoutes); 
app.use('/api/medicine',medicineRoutes);
app.use('/api/dose',doseRouter);

app.get('/', (req, res) => {
    res.send('API conectada');
  });

const doseRepo = new MySQLDoseRepository();

const notifier = new WebSocketNotifier();

setInterval(() => {
    sendDoseNotifications(doseRepo,  notifier);
  }, 60 * 1000);

wss.on('connection', (ws: WebSocket) => {
    console.log('Cliente conectado');

    ws.on('message', (message: string) => {
        console.log(`Mensaje recibido: ${message}`);
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Echo: ${message}`);
            }
        });
    });

    ws.on('close', () => console.log('El cliente se ha desconectado'));
});

export const broadcast = (message: string) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

const verifyDatabaseConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL conectado y listo para su uso :)');
        connection.release();
    } catch (error) {
        console.error('Error al intentar conectar con MySQL. Asegúrate de que la base de datos esté encendida:', error);
        process.exit(1);
    }
};

verifyDatabaseConnection();
