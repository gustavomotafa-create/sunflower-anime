// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Config do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyB-XtsU24UNSKJra1lq_HVvBFdHBG7kezw",
  authDomain: "sunflower-anime-site.firebaseapp.com",
  projectId: "sunflower-anime-site",
  storageBucket: "sunflower-anime-site.appspot.com",
  messagingSenderId: "727681948763",
  appId: "1:727681948763:web:423e2b2066274ee6a3737e"
};

// Inicializa
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta
export { db };