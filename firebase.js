import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrbEyAFk_hJmBdU1GIaUTW5mZWCL4vXrM",
  authDomain: "jahcore-e8653.firebaseapp.com",
  databaseURL: "https://jahcore-e8653-default-rtdb.firebaseio.com",
  projectId: "jahcore-e8653",
  storageBucket: "jahcore-e8653.appspot.com",
  messagingSenderId: "869095509266",
  appId: "1:869095509266:web:1e3ba92bfc3a01ac1e77cb"
};

const app = initializeApp(firebaseConfig);

// اتصال به Realtime Database
export const db = getDatabase(app);
