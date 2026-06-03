function Navbar(user) {
  return `
    <div class="navbar">
      <div class="logo">⚡ JAHCORE</div>

      <div>
        ${
          user
            ? `<span>👤 ${user.email}</span> <button onclick="logout()">Logout</button>`
            : `
              <input id="email" placeholder="email" />
              <input id="pass" type="password" placeholder="password" />

              <button onclick="register(
                document.getElementById('email').value,
                document.getElementById('pass').value
              )">Register</button>

              <button onclick="login(
                document.getElementById('email').value,
                document.getElementById('pass').value
              )">Login</button>
            `
        }
      </div>
    </div>
  `;
}

function Sidebar() {
  return `
    <div class="sidebar">
      <div>🏠 Home</div>
      <div>📚 Library</div>
      <div>🔍 Search</div>
      <div>👤 Profile</div>
    </div>
  `;
}

function LibraryUI() {
  return `
    <div>
      <h2>📚 Library (Firebase)</h2>

      <input id="bookTitle" placeholder="Book title..." />
      <button onclick="addBook()">Add Book</button>

      <ul id="bookList"></ul>
    </div>
  `;
}

/* ================= FIREBASE AUTH ================= */

function register(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => loadUser())
    .catch(e => alert(e.message));
}

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => loadUser())
    .catch(e => alert(e.message));
}

function logout() {
  auth.signOut().then(() => loadUser());
}

function getUser() {
  return auth.currentUser;
}

/* ================= FIRESTORE BOOKS ================= */

function addBook() {
  const user = getUser();
  const title = document.getElementById("bookTitle").value;

  if (!user) return alert("Login first");
  if (!title) return alert("Enter book title");

  db.collection("books").add({
    title: title,
    uid: user.uid
  });

  renderBooks();
}

function renderBooks() {
  const user = getUser();
  if (!user) return;

  db.collection("books")
    .where("uid", "==", user.uid)
    .onSnapshot(snapshot => {
      const books = snapshot.docs.map(doc => doc.data());

      document.getElementById("bookList").innerHTML =
        books.map(b => `<li>📘 ${b.title}</li>`).join("");
    });
}

/* ================= MAIN APP ================= */

function loadUser() {
  const user = getUser();

  document.getElementById("app").innerHTML = `
    ${Navbar(user)}
    <div class="container">
      ${Sidebar()}
      <div class="content">
        <h1>Welcome to JAHCORE 🚀</h1>
        <p>${user ? "Logged in as: " + user.email : "You are not logged in"}</p>

        ${user ? LibraryUI() : "<p>Please login to use Library</p>"}
      </div>
    </div>
  `;

  if (user) renderBooks();
}

/* AUTO LOGIN */
firebase.auth().onAuthStateChanged(user => {
  loadUser();
});
