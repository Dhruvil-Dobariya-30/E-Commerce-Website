let allData = JSON.parse(localStorage.getItem("data"));
let productDiv = document.querySelector(".allProductDiv");
function allProducts() {
  productDiv = "";

  allData.map((data) => {
    console.log(data);
    productDiv += `
        <div>
        <img src="${data.image}">
        <h2>${data.name}</h2>
        </div>
    `;
  });

  document.querySelector(".allProductDiv").innerHTML = productDiv;
}

allProducts();
