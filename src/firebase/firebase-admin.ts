import * as admin from 'firebase-admin';

const serviceAccount = require('../../src/pilcoreapi-firebase-adminsdk-fbsvc-ad7e91eaea');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://pilcoreapi-default-rtdb.firebaseio.com/'
});

admin.database().ref('.info/connected').on('value', (snap) => {
    if (snap.val() === true) {
      console.log('✅ Conectado a Firebase Realtime Database');
    } else {
      console.warn('⚠️ Firebase desconectado');
    }
  });
  
export const dbFirebase = admin.database();
