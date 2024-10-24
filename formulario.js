import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/f...";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/f...";//https://cdnjs.cloudflare.com/ajax/libs/fir...
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/f..."

const firebaseConfig = {
    apiKey: "AIzaSyDT1z5f7Z1709lagNs5Jwjyp_PsJHh-LRs",
    authDomain: "estetica-gy.firebaseapp.com",
    projectId: "estetica-gy",
    storageBucket: "estetica-gy.appspot.com",
    messagingSenderId: "877316368834",
    appId: "1:877316368834:web:82804ff096a374dcdf0e5b",
    measurementId: "G-2ZRS1ST4E4"
  };


const app = initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)

document.getElementById("btnEnviar").addEventListener("click", async () => {
    const Nombre = document.getElementById("inputNombre").value;
    const Telefono = document.getElementById("inputTelefono").value;
    const Direccion = document.getElementById("inputDireccion").value;

    console.log(Nombre, Telefono, Direccion);

    try {
        const id = new Date().getTime(); // Genera un ID único basado en el tiempo
        await setDoc(doc(db, "usuario", id.toString()), {
            Nombre: Nombre,
            Telefono: Telefono,
            Direccion: Direccion,
        });
        alert("Usuario creado");
    } catch (e) {
        console.error("Error creando usuario:", e);
    }
});