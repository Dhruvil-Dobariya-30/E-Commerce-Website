document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar");
  let loginData = JSON.parse(localStorage.getItem("Login"));
  let signupData = JSON.parse(localStorage.getItem("SignupData"));

  function userName(email) {
    const user = signupData.find((user) => user.email === email);
    return user ? user.name : "User";
  }

  function updateNavbar() {
    const user = loginData ? userName(loginData.email) : null;

    const navbarHTML = `
      <nav class="navbar">
        <a href="/" class="navbar-brand">Shoe</a>
        <button class="navbar-toggle">&#9776;</button>
        <div class="navbar-menu">
          <ul class="navbar-links">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../Functionality/All-Products/AllProducts.html">All Products</a></li>
            <li><a href="#" id="cartLink">Cart</a></li>
          </ul>
          <div class="buttons">
            ${
              !loginData
                ? `<button class="btnn sign"><a href="../../Auth/Login/Login.html">Sign Up</a></button>`
                : ""
            }
            <button class="btnn login" id="loginLogoutBtn">
              ${loginData ? "Logout" : "Login"}
            </button>
            <div class="profile-section">
              <div class="profile-icon">
                <img src="../../Data/Images/user.png" alt="Profile Pic">
              </div>
              ${user ? `<div class="user-name">${user}</div>` : ""}
              <div class="profile-hover-box">
                ${
                  user
                    ? `<p>Welcome, ${user}</p>
                     <a href="../../Auth/Reset-Password/Reset-Password.html">Reset Password</a>`
                    : "<p>Please log in to view your profile</p>"
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;

    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    const buttons = document.querySelector(".buttons");
    const loginLogoutBtn = document.getElementById("loginLogoutBtn");
    const cartLink = document.getElementById("cartLink");

    navbarToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
      buttons.classList.toggle("active");
    });

    loginLogoutBtn.addEventListener("click", function () {
      if (loginData) {
        localStorage.removeItem("Login");
        loginData = null;
        updateNavbar();
        window.location.href = "../../index.html";
      } else {
        window.location.href = "../../Auth/Login/Login.html";
      }
    });

    cartLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (loginData) {
        window.location.href = "../../Functionality/Cart/Cart.html";
      } else {
        alert("please Login For Viewing Cart!");
      }
    });
  }

  updateNavbar();
});
