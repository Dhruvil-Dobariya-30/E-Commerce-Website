let allData = JSON.parse(localStorage.getItem("data")) || [];
const productDiv = document.querySelector(".allProductDiv");
let currentItem = 0;
const initialLoad = 6;
const itemsPerLoad = 3;

let selectedBrand = "All";
let selectedRating = "All";
let selectedPrice = "All";
let selectedCategory = "All";
let selectedType = "All";

function displayProducts(start, end) {
  const filteredData = allData.filter(
    (product) =>
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedType === "All" || product.type === selectedType)
  );

  if (selectedPrice === "Low to High") {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (selectedPrice === "High to Low") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  if (selectedRating === "High to Low") {
    filteredData.sort((a, b) => b.rating - a.rating);
  } else if (selectedRating === "Low to High") {
    filteredData.sort((a, b) => a.rating - b.rating);
  }

  const newProducts = filteredData
    .slice(start, end)
    .map(
      (data) => `
    <div class="product-list">
      <div class="container">
        <div class="images">
          <img src="${data.image}" alt="${data.name}" />
        </div>
        <p class="pick">Choose size</p>
        <div class="sizes">
          ${data.sizes
            .map(
              (size) => `<div class="size" onclick="getColor()">${size}</div>`
            )
            .join("")}
        </div>
        <div class="product">
          <p>${data.category}</p>
          <h1>${data.name}</h1>
          <h2>₹${data.price}</h2>
          <p class="desc">${data.description}</p>
          <p>Rating: ${data.rating}</p>
          <div class="buttons">
            <button class="add" onclick="addToCart(${
              data.id
            })">Add to Cart</button>
            <button class="add" onclick="storeId(${
              data.id
            })">See Details</button>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  if (start === 0) {
    productDiv.innerHTML = newProducts;
  } else {
    productDiv.insertAdjacentHTML("beforeend", newProducts);
  }
  currentItem = end;
}

function createFilters() {
  const filterDiv = document.querySelector(".filterDiv");

  const createFilterSelect = (id, options) => `
    <select id="${id}">
      ${options
        .map((option) => `<option value="${option}">${option}</option>`)
        .join("")}
    </select>
  `;

  const brands = ["All", ...allData.map((product) => product.brand)];
  const types = ["All", ...allData.map((product) => product.type)];
  const categories = ["All", ...allData.map((product) => product.category)];

  const uniqueBrands = brands.filter(
    (brand, index) => brands.indexOf(brand) === index
  );
  const uniqueTypes = types.filter(
    (type, index) => types.indexOf(type) === index
  );
  const uniqueCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );

  const filters = [
    { id: "brandFilter", options: uniqueBrands },
    { id: "ratingFilter", options: ["All", "High to Low", "Low to High"] },
    { id: "priceFilter", options: ["All", "Low to High", "High to Low"] },
    { id: "categoryFilter", options: uniqueCategories },
    { id: "typeFilter", options: uniqueTypes },
  ];

  filterDiv.innerHTML = filters
    .map((filter) => createFilterSelect(filter.id, filter.options))
    .join("");

  filters.forEach((filter) => {
    document
      .getElementById(filter.id)
      .addEventListener("change", updateFilters);
  });
}

function updateFilters() {
  selectedBrand = document.getElementById("brandFilter").value;
  selectedRating = document.getElementById("ratingFilter").value;
  selectedPrice = document.getElementById("priceFilter").value;
  selectedCategory = document.getElementById("categoryFilter").value;
  selectedType = document.getElementById("typeFilter").value;

  currentItem = 0;
  displayProducts(0, initialLoad);
}

function storeId(id) {
  window.location.replace(
    "../Single-Product/SingleProduct.html?id=" + JSON.stringify(id)
  );

  setTimeout(() => {
    window.location.href = "../Single-Product/SingleProduct.html";
  }, 300);
}

function loadMore() {
  const start = currentItem;
  const end = currentItem + itemsPerLoad;
  displayProducts(start, end);
}

createFilters();
displayProducts(0, initialLoad);
