let Data = JSON.parse(localStorage.getItem("data")) || [];
let singleProductDiv = document.querySelector(".item");
const ID = new URLSearchParams(window.location.search).get("id");
let productID = JSON.parse(ID);

function displayProduct() {
  console.log(productID);
  singleProductDiv = "";

  Data.map((data) => {
    if (data.id === productID) {
      singleProductDiv += `
       <div div class="card">
        <div class="imgDiv">
            <img src="${data.image}" >
        </div>
        <div class="infoDiv">
            <h1 class="card-name">${data.name}</h1> <hr />
            <h4 class="card-description">${data.description}</h4>
            <h4 class="card-size">Available Sizes : ${data.sizes.join(
              ", "
            )}</h4>
            <h4 class="card-size">Available Sizes : ${data.colors.join(
              ", "
            )}</h4>
            <h4 class="card-size">Collection : ${data.category}</h4>
            <h4 class="card-size">Type : ${data.type}</h4>
            <p class="rating">Rating : ${data.rating} / 5.0</p>
            <h2 class="card-price">Price : ${data.price}₹</h2>
        </div>
        <div class="buttonDiv">
        <button class="btn">Add To Cart</button>
        </div>
       </div>
    `;
    }
  });

  document.querySelector(".item").innerHTML = singleProductDiv;
}

displayProduct();
