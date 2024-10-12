
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCYtBDunaKO3hcWAntdmRty8N3dFGKvhVA",
    authDomain: "usuarios-ff69d.firebaseapp.com",
    databaseURL: "https://usuarios-ff69d-default-rtdb.firebaseio.com",
    projectId: "usuarios-ff69d",
    storageBucket: "usuarios-ff69d.appspot.com",
    messagingSenderId: "63150293141",
    appId: "1:63150293141:web:33f299369773f46eef9b9c",
    measurementId: "G-7MVQ1N4MZ6"
  };
  

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
