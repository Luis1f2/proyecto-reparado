import * as admin from 'firebase-admin';

const serviceAccount = require('./ruta/a/tu/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tu-proyecto.firebaseio.com'
});

export const dbFirebase = admin.database();
