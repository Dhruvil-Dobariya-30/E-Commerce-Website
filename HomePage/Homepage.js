let allData = JSON.parse(localStorage.getItem("data"));
let bestProductsDiv = document.querySelector(".bestProducts");

console.log(allData);

var typed = new Typed("#typed-text", {
  strings: ["The perfect <span>shoe</span><br/>&emsp; for every occasion."],
  showCursor: false,
  typeSpeed: 35,
  backSpeed: 30,
  loop: true,
});

function bestProducts() {
  let bestProductsHTML = "";

  for (var i = 2; i < 6; i++) {
    bestProductsHTML += `
    <div class="items">
      <img src="../Images/shoes/adidas-${i}.png" alt="${allData[i - 1].image}"> 
      <h3>${allData[i - 1].name}</h3>
      <p>Rating : ${allData[i - 1].rating} (155 Reviews) </p>
      <p>Price  : ${allData[i - 1].price}₹</p>
      <div>
        <button>Add to Cart</button>
        <button>Explore All Products</button>
      </div>

    </div>
    `;
  }

  bestProductsDiv.innerHTML = bestProductsHTML;
}

bestProducts();
