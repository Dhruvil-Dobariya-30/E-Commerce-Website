let nav = document.getElementById("navbar");

nav = "";

// nav += `
// <div class="nav-container">
//     <nav>
//         <ul>
//             <li><a href="../HomePage/Homepage.html">Home</a></li>
//             <li>Categories</li>
//             <li><a href="../All-Products/AllProducts.html">Products</a></li>
//             <li>Filter</li>
//             <li>About Us</li>
//         </ul>

//         <div class="btns">
//                 <button> <a href="../Cart/Cart.html">Cart</a></button>
//                 <button><a href="../index.html">Login</a></button>
//                 <button><a href="../SignUp/signUp.html">Register</a></button>
//             </div>
//     </nav>
// </div>

// `;
nav += `
    <header>
    <div class="navbar">
        <div class="logo">
            <a href="#">Shoesfy</a>
        </div>
        <div class="nav">
            <ul>
                <li><a href="../HomePage/Homepage.html">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="../All-Products/AllProducts.html">All Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="menu"><i class="fa-solid fa-bars"></i></div>
        </div>
        <a href="../index.html" class="highlight">Login</a>
        <a href="../index.html" class="highlight"><i class="fa-solid fa-cart-shopping"></i></a>
        <div class="dropdown-menu">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" class="highlight">Download CV</a></li>
            </ul>
        </div>
    </div>
</header>
`;

document.getElementById("navbar").innerHTML = nav;

const toggleBtn = document.querySelector(".menu");
const toggleBtnIcon = toggleBtn.querySelector("i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
  toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
};
