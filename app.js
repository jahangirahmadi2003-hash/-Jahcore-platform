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

function loadUser() {
  const user = localStorage.getItem("jahcore_user");

  document.getElementById("app").innerHTML = `
    ${Navbar(user)}
    <div class="container">
      ${Sidebar()}
      <div class="content">
        <h1>Welcome to JAHCORE 🚀</h1>
        <p>${user ? "Logged in as: " + user : "You are not logged in"}</p>
      </div>
    </div>
  `;
}

// global
window.register = register;
window.login = login;
window.logout = logout;

loadUser();
