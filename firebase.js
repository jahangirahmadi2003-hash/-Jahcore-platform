const firebaseConfig = {
  apiKey: "AIzaSyAl3Nsp-4pqPGDa6RlM09UQeAchi8sHw",
  authDomain: "jahcore-ea0a1.firebaseapp.com",
  projectId: "jahcore-ea0a1",
  storageBucket: "jahcore-ea0a1.appspot.com",
  messagingSenderId: "187339185098",
  appId: "1:187339185098:web:3c94026a0dc1fd15120d33",
  measurementId: "G-MLHSVSCKMM"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
