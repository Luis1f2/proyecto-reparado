import { DoseRepository } from "../domain/doseRepository";
import pool from "../../database/db_Mysql";

export class MySQLDoseRepository implements DoseRepository {
    async getPending() {
        const [dosis]: any = await pool.query(`
            SELECT 
                d.id_dosis,
                d.hora,
                p.nombre AS pacienteNombre,
                m.nombre AS medicamentoNombre
            FROM dosis d
            INNER JOIN medicamento m ON d.medicamento_id = m.id
            INNER JOIN paciente p ON m.paciente_id = p.id
            WHERE TIME(d.hora) <= TIME(NOW())
              AND NOT d.notificada
              AND NOT d.aceptada
        `);
        return dosis;
    }

    async markAsNotified(doseId: number) {
        await pool.query(`
            UPDATE dosis 
            SET notificada = 1, hora_notificacion = NOW() 
            WHERE id_dosis = ?
        `, [doseId]);
    }

    async resetUnaccepted() {
        const [noAceptadas]: any = await pool.query(`
            SELECT id_dosis FROM dosis
            WHERE notificada = 1 
              AND aceptada = 0 
              AND hora_notificacion IS NOT NULL 
              AND TIMESTAMPDIFF(MINUTE, hora_notificacion, NOW()) >= 5
        `);

        for (const d of noAceptadas) {
            await pool.query(`
                UPDATE dosis 
                SET notificada = 0, hora_notificacion = NULL 
                WHERE id_dosis = ?
            `, [d.id_dosis]);
        }
    }
}
