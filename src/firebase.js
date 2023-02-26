import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDOueZmf4OzHiTcD8-i3GoUDmxZRLzJer8",
  authDomain: "jkchat-f91a6.firebaseapp.com",
  projectId: "jkchat-f91a6",
  storageBucket: "jkchat-f91a6.appspot.com",
  messagingSenderId: "9305836987",
  appId: "1:9305836987:web:b028658816c07884ab089e",
  measurementId: "G-RFR2JTXLML"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
