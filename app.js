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
