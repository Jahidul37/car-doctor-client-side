// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxq3Wd4QaFGpaZWz0WwPIzaKjb0mnGYk0",
    authDomain: "cars-doctor-f1f62.firebaseapp.com",
    projectId: "cars-doctor-f1f62",
    storageBucket: "cars-doctor-f1f62.appspot.com",
    messagingSenderId: "173151895771",
    appId: "1:173151895771:web:bb4624b7d542d418e50cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;