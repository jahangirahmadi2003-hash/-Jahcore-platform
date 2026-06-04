import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
const db = getDatabase(app);

// UI
document.getElementById("app").innerHTML = `
  <div>
    <h1>⚡ JAHCORE</h1>

    <button id="addBookBtn">➕ Add Book</button>

    <h2>📚 Books</h2>
    <div id="books">Loading...</div>
  </div>
`;

// add book
document.getElementById("addBookBtn").onclick = () => {
  set(ref(db, "books/1"), {
    title: "First Book",
    author: "JAHCORE",
    price: 0
  });
};

// load books
const booksRef = ref(db, "books");

onValue(booksRef, (snapshot) => {
  const data = snapshot.val();

  let html = "";

  if (data) {
    for (let id in data) {
      html += `
        <div>
          <h3>${data[id].title}</h3>
          <p>${data[id].author}</p>
        </div>
      `;
    }
  } else {
    html = "No books";
  }

  document.getElementById("books").innerHTML = html;
});
