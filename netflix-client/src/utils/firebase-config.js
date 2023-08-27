import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFQqaYiPgqnlp_6Xxg85udeYb97SET02c",
  authDomain: "project-1-6bdc9.firebaseapp.com",
  projectId: "project-1-6bdc9",
  storageBucket: "project-1-6bdc9.appspot.com",
  messagingSenderId: "747301989437",
  appId: "1:747301989437:web:cf1017350fc8853cbf8e54",
  measurementId: "G-HKMH0K4Z4Q"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
