function Navbar() {
  return `
    <div class="navbar">
      <div class="logo">⚡ JAHCORE</div>
      <div>
        <button>Login</button>
        <button>Register</button>
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

document.getElementById("app").innerHTML = `
  ${Navbar()}
  <div class="container">
    ${Sidebar()}
    <div class="content">
      <h1>Welcome to JAHCORE 🚀</h1>
      <p>Stage 1: Base system is running.</p>
    </div>
  </div>
`;
