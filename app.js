function Navbar(user) {
  return `
    <div class="navbar">
      <div class="logo">⚡ JAHCORE</div>

      <div>
        ${
          user
            ? `<span>👤 ${user}</span> <button onclick="logout()">Logout</button>`
            : `<input id="userInput" placeholder="username" />
               <button onclick="register(document.getElementById('userInput').value)">Register</button>
               <button onclick="login(document.getElementById('userInput').value)">Login</button>`
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
      <h2>📚 Library</h2>

      <input id="bookTitle" placeholder="Book title..." />
      <button onclick="addBook()">Add Book</button>

      <ul id="bookList"></ul>
    </div>
  `;
}

function getUser() {
  return localStorage.getItem("jahcore_user");
}

function getBooks() {
  const user = getUser();
  if (!user) return [];

  const data = localStorage.getItem("books_" + user);
  return data ? JSON.parse(data) : [];
}

function saveBooks(books) {
  const user = getUser();
  localStorage.setItem("books_" + user, JSON.stringify(books));
}

function addBook() {
  const user = getUser();
  if (!user) return alert("Login first");

  const title = document.getElementById("bookTitle").value;
  if (!title) return alert("Enter book title");

  const books = getBooks();
  books.push({ title });

  saveBooks(books);
  renderBooks();
}

function renderBooks() {
  const books = getBooks();

  document.getElementById("bookList").innerHTML =
    books.map(b => `<li>📘 ${b.title}</li>`).join("") ||
    "<p>No books yet</p>";
}

function register(username) {
  if (!username) return alert("Enter username");

  localStorage.setItem("jahcore_user", username);
  loadUser();
}

function login(username) {
  const saved = localStorage.getItem("jahcore_user");

  if (username === saved) {
    loadUser();
  } else {
    alert("User not found");
  }
}

function logout() {
  localStorage.removeItem("jahcore_user");
  loadUser();
}

function loadUser() {
  const user = getUser();

  document.getElementById("app").innerHTML = `
    ${Navbar(user)}
    <div class="container">
      ${Sidebar()}
      <div class="content">
        <h1>Welcome to JAHCORE 🚀</h1>
        <p>${user ? "Logged in as: " + user : "You are not logged in"}</p>

        ${user ? LibraryUI() : "<p>Please login to use Library</p>"}
      </div>
    </div>
  `;

  if (user) renderBooks();
}

// global functions
window.addBook = addBook;

loadUser();
