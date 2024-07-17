let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let questionInput = document.getElementById("question");
let answerInput = document.getElementById("answer");
let allData = JSON.parse(localStorage.getItem("SignupData")) || [];

console.log(allData);

function signup() {
  var data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    security: `${questionInput.value} : ${answerInput.value}`,
  };

  if (allData.find((user) => user.Email === data.Email)) {
    alert("User already exists!");
  } else {
    allData.push(data);
    localStorage.setItem("SignupData", JSON.stringify(allData));
    alert("User registered successfully!");
    window.location.href = "./index.html";
  }
}
