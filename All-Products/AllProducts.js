let allData = JSON.parse(localStorage.getItem("data")) || [];
let productDiv = document.querySelector(".allProductDiv");
let currentItem = 0;
const initialLoad = 4;
const itemsPerLoad = 4;

function displayProducts(startIndex, endIndex) {
  let newProducts = "";

  for (let i = startIndex; i < endIndex && i < allData.length; i++) {
    const data = allData[i];
    newProducts += `
      <div class="product-list">
        <div class="container">
          <div class="images">
            <img src="${data.image}" alt="${data.name}" />
          </div>
          <p class="pick">Choose size</p>
          <div class="sizes">
            <div class="size">5</div>
            <div class="size">6</div>
            <div class="size">7</div>
            <div class="size">8</div>
            <div class="size">9</div>
            <div class="size">10</div>
            <div class="size">11</div>
            <div class="size">12</div>
          </div>
          <div class="product">
            <p>${data.category}</p>
            <h1>${data.name}</h1>
            <h2>${data.price}</h2>
            <p class="desc">${data.description}</p>
            <div class="buttons">
              <button class="add">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  productDiv.innerHTML += newProducts;
}

function loadMore() {
  let startIndex = currentItem;
  let endIndex = currentItem + itemsPerLoad;
  displayProducts(startIndex, endIndex);
  currentItem = endIndex;

  if (currentItem >= allData.length) {
    document.getElementById("load-more-btn").style.display = "none";
  }
}

displayProducts(0, initialLoad);
currentItem = initialLoad;
