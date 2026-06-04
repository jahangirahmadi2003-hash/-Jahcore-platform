import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDrbEyAFk_hJmBdU1GIaUTW5mZWCL4vXrM",
  authDomain: "jahcore-e8653.firebaseapp.com",
  databaseURL: "https://jahcore-e8653-default-rtdb.firebaseio.com",
  projectId: "jahcore-e8653",
  storageBucket: "jahcore-e8653.appspot.com",
  messagingSenderId: "869095509266",
  appId: "1:869095509266:web:1e3ba92bfc3a01ac1e77cb"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// UI
document.getElementById("app").innerHTML = `
  <div class="container">
    <h1>⚡ JAHCORE</h1>

    <p>AI • Library • News • Marketplace • Wallet</p>

    <button id="addBookBtn">➕ Add Test Book</button>

    <hr>

    <h2>📚 Digital Library</h2>
    <div id="books">Loading books...</div>

    <h2>📰 News</h2>
    <p>Latest global news.</p>

    <h2>🛒 Marketplace</h2>
    <p>Buy and sell digital products.</p>

    <h2>💳 Wallet</h2>
    <p>Manage your balance.</p>
  </div>
`;

// Add test book
document.getElementById("addBookBtn").onclick = () => {
  set(ref(db, "books/1"), {
    title: "First Book",
    author: "JAHCORE",
    price: 0
  });
};

// Load books realtime
const booksRef = ref(db, "books");

onValue(booksRef, (snapshot) => {
  const data = snapshot.val();

  let html = "";

  if (data) {
    for (let id in data) {
      html += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${data[id].title}</h3>
          <p>${data[id].author}</p>
          <p>💰 ${data[id].price}</p>
        </div>
      `;
    }
  } else {
    html = "<p>No books found</p>";
  }

  document.getElementById("books").innerHTML = html;
});
