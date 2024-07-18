let allData = JSON.parse(localStorage.getItem("SignupData")) || [];
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");

function login() {
  if (loginEmail.value === "" || loginPassword.value === "") {
    alert("Please fill in both email and password fields.");
  } else if (
    allData.find(
      (e) => e.email === loginEmail.value && e.password === loginPassword.value
    )
  ) {
    alert("Login successful!");
    window.location.href = "./HomePage/Homepage.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
