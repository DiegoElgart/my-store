import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzk22U2cNr8YIYr4Bl5PZ2kMuoxE1ArsQ",
    authDomain: "store-react2.firebaseapp.com",
    projectId: "store-react2",
    storageBucket: "store-react2.appspot.com",
    messagingSenderId: "902361779602",
    appId: "1:902361779602:web:dcedd9f9840aebbd33054b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
