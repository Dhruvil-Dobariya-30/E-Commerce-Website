let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let allData = JSON.parse(localStorage.getItem("SignupData")) || [];
let questionInput = document.getElementById("question");
let answerInput = document.getElementById("answer");

console.log(allData);

function question() {
  questionInput = document.getElementById("question").value;
  console.log(questionInput);
}
function answer() {
  answerInput = document.getElementById("answer").value;
  console.log(answerInput);
}

function signup() {
  var data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    security: `${questionInput} : ${answerInput}`,
  };

  if (allData.find((user) => user.email === data.email)) {
    alert("User already exists!");
  } else {
    allData.push(data);
    localStorage.setItem("SignupData", JSON.stringify(allData));
    alert("User registered successfully!");
    window.location.href = "../index.html";
  }
}
