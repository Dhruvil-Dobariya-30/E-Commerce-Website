let cartDiv = document.querySelector(".cartDiv");
let cartItems = [];

function addToCart(id) {
  let productData = allData.find((data) => data.id === id);

  let existingItem = cartItems.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: id,
      quantity: 1,
      name: productData.name,
      image: productData.image,
      price: productData.price,
      rating: productData.rating,
      category: productData.category,
      size: productData.sizes,
    });
  }

  console.log(cartItems);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function incrItem(id) {
  let item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
  }
}

function decrItem(id) {
  let item = cartItems.find((item) => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else if (item && item.quantity === 1) {
    cartItems = cartItems.filter((item) => item.id !== id);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function removeFromCart(id) {
  cartItems = cartItems.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function totalAmount() {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function updateSize(id, size) {
  let item = cartItems.find((item) => item.id === id);
  if (item) {
    item.selectedSize = size;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
  }
}

function displayCart() {
  cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  let cartData = cartItems
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>Collection: ${item.category}</p>
      <p>Rating: ${item.rating} (155 Reviews)</p>
      <h3>Price: ₹${item.price}</h3>
      <p>Subtotal: ₹${item.price * item.quantity}</p>
      <button onclick="decrItem(${item.id})">-</button>
      <span>${item.quantity}</span>
      <button onclick="incrItem(${item.id})">+</button>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `
    )
    .join("");

  cartDiv.innerHTML = cartData;

  let totalDiv = document.querySelector(".total");
  totalDiv.innerHTML = `<div class="total">Total Amount: ₹${totalAmount()}</div>`;
}

document.addEventListener("DOMContentLoaded", displayCart);
