import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpOsobBbKBcR02t_UhibmLFVzMYYPE6MM",
    authDomain: "curso-react-832ac.firebaseapp.com",
    projectId: "curso-react-832ac",
    storageBucket: "curso-react-832ac.appspot.com",
    messagingSenderId: "745944710443",
    appId: "1:745944710443:web:a05f96329a9e9f3085196e",
    measurementId: "G-0TBXN0V1DN"
  }; //configuração do firebase

  const firebaseApp = initializeApp(firebaseConfig); // instancia do firebase

  const db = getFirestore(firebaseApp); // criação da instancia do banco
  const auth = getAuth(firebaseApp); // criação da instancia do banco

  export { db, auth };