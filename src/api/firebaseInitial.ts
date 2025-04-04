import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjhT8sQPRvv93frTH183_qB2S-xEFinDY",
  authDomain: "userslist-e3f98.firebaseapp.com",
  projectId: "userslist-e3f98",
  storageBucket: "userslist-e3f98.firebasestorage.app",
  messagingSenderId: "426276399415",
  appId: "1:426276399415:web:d915b4e253763c743b12b2",
  measurementId: "G-4G2NMJBQEM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
