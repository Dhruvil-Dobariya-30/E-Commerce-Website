let nav = document.getElementById("navbar");

nav = "";

nav += `
<div class="nav-container"> 
    <nav>
        <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Products</li>
            <li>Filter</li>
            <li>About Us</li>
        </ul>

        <div class="btns">
                <button> <a href="">Cart</a></button>
                <button>Login</button>
                <button>Register</button>
            </div>
    </nav>
</div>

`;

document.getElementById("navbar").innerHTML = nav;
