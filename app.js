const firebaseConfig = {
  apiKey: "AIzaSyDrbEyAFk_hJmBdU1GIaUTW5mZWCL4vXrM",
  authDomain: "jahcore-e8653.firebaseapp.com",
  databaseURL: "https://jahcore-e8653-default-rtdb.firebaseio.com",
  projectId: "jahcore-e8653",
  storageBucket: "jahcore-e8653.appspot.com",
  messagingSenderId: "869095509266",
  appId: "1:869095509266:web:1e3ba92bfc3a01ac1e77cb"
};

// init firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// UI
document.getElementById("app").innerHTML = `
  <div style="font-family:Arial; padding:20px">
    <h1>⚡ JAHCORE</h1>

    <button id="addBookBtn">➕ Add Book</button>

    <h2>📚 Library</h2>
    <div id="books">Loading...</div>
  </div>
`;

// add book
document.getElementById("addBookBtn").onclick = () => {
  db.ref("books/1").set({
    title: "First Book",
    author: "JAHCORE",
    price: 0
  });
};

// load books
db.ref("books").on("value", (snapshot) => {
  const data = snapshot.val();

  let html = "";

  if (data) {
    for (let id in data) {
      html += `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <h3>${data[id].title}</h3>
          <p>${data[id].author}</p>
          <p>💰 ${data[id].price}</p>
        </div>
      `;
    }
  } else {
    html = "<p>No books yet</p>";
  }

  document.getElementById("books").innerHTML = html;
});
