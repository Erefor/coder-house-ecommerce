import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore'
const firebaseapp = initializeApp({
    apiKey: "AIzaSyAm1ypzTJb9ArcoMntVMxO4lm7CUKDqOjo",
    authDomain: "ecommerce-3d0b5.firebaseapp.com",
    projectId: "ecommerce-3d0b5",
    storageBucket: "ecommerce-3d0b5.appspot.com",
    messagingSenderId: "705745403960",
    appId: "1:705745403960:web:64323d1c3b6f9ff72aa6cd"
});
const db = getFirestore(firebaseapp)

export default db;
