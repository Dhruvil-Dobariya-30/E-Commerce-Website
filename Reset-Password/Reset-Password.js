function reset() {
  let allData = JSON.parse(localStorage.getItem("SignupData")) || [];
  const email = document.getElementById("resetEmail").value;
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("re-pass").value;

  allData.map((data) => {
    if (data.email === email) {
      if (data.password === password) {
        data.password = rePassword;
        localStorage.setItem("SignupData", JSON.stringify(allData));
        alert("Password reset successfully!");
      } else {
        alert("Incorrect current password!");
      }
    } else {
      alert("Email not found!");
    }
  });
}
