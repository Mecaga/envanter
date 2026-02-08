
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbIFwbCiLlSLDMjaOq_lViHc_yFm9fbLw",
  authDomain: "whatsapp-a0929.firebaseapp.com",
  projectId: "whatsapp-a0929",
  storageBucket: "whatsapp-a0929.firebasestorage.app",
  messagingSenderId: "303101771948",
  appId: "1:303101771948:web:de91e54d5cf8ac57459f09"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
