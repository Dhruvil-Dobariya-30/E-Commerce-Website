let allDatas = JSON.parse(localStorage.getItem("data"));
let bestProductsDiv = document.querySelector(".bestProducts");

new Typed("#typed-text", {
  strings: ["Discover Your Style", "Step into Comfort", "Experience the Best"],
  typeSpeed: 70,
  backSpeed: 25,
  loop: true,
  showCursor: false,
});
function bestProducts() {
  let bestProductsHTML = "";

  for (var i = 1; i < 5; i++) {
    bestProductsHTML += `
    <div class="items">
      <img src="${allDatas[i - 1].image}" alt="${allDatas[i - 1].name}"> 
      <h3>${allDatas[i - 1].name}</h3>
      <p>Rating: ${allDatas[i - 1].rating} (155 Reviews)</p>
      <p>Price: ${allDatas[i - 1].price}₹</p>
      <div>
        <button class="btn primary-btn" onclick="isLogin(${
          i - 1
        })">Add to Cart</button>
        <button class="btn secondary-btn" onclick="storeId(${
          i - 1
        })">View Details</button>
      </div>
    </div>
    `;
  }

  bestProductsDiv.innerHTML = bestProductsHTML;
}

bestProducts();

function storeId(id) {
  window.location.replace(
    "./Functionality/Single-Product/SingleProduct.html?id=" + JSON.stringify(id)
  );

  setTimeout(() => {
    window.location.href = "../Single-Product/SingleProduct.html";
  }, 300);
}
