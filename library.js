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
  books.push({ title: title });

  saveBooks(books);
  renderBooks();
}

function renderBooks() {
  const books = getBooks();

  const list = books.map(b => `<li>📘 ${b.title}</li>`).join("");

  document.getElementById("bookList").innerHTML =
    list || "<p>No books yet</p>";
}
