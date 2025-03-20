import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyCQSY8KQWocxngOAwKz9v8MRv72rsPxDfM",
    authDomain: "eleven-51a45.firebaseapp.com",
    databaseURL: "https://eleven-51a45-default-rtdb.firebaseio.com",
    projectId: "eleven-51a45",
    storageBucket: "eleven-51a45.firebasestorage.app",
    messagingSenderId: "174153847388",
    appId: "1:174153847388:web:153de52b1835d3d8238c99"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase()
export { db }