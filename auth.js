function register(username) {
  if (!username) return alert("Enter username");

  localStorage.setItem("jahcore_user", username);
  alert("Registered successfully");
  loadUser();
}

function login(username) {
  const saved = localStorage.getItem("jahcore_user");

  if (username === saved) {
    alert("Login success");
    loadUser();
  } else {
    alert("User not found");
  }
}

function logout() {
  localStorage.removeItem("jahcore_user");
  loadUser();
}
