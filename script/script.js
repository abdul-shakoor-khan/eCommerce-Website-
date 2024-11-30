// Importing data from external files: products and cart functionalities
import { products } from "../data/products.js";
import { updateCartQuantity } from "../data/cart.js";

// Event listener to run code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Call function to populate product list on the page
  addToShakoorHTML();
});

// Initialize an empty string to hold the HTML for products
let shakoorHTML = "";

// Function to generate and add product HTML to the page
function addToShakoorHTML() {
  // Iterate over each product in the 'products' array
  products.forEach(product => {

    // Initialize an empty string to build the product rating
    let rate = "";

    // Loop through the product's rating classes and create <i> elements for stars/icons
    product.rating.forEach(rateClass => {
      rate += `<i class="${rateClass}"></i>`
    });

    // Build the product's HTML structure using template literals
    shakoorHTML += `
    <a class="product" href="product-detail.html?id=${product.id}">
      <img src="${product.mainImage}"
        alt="product-img">
      <div class="product-content">
        <div class="product-heading">
          ${product.name}
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
          <span class="discount">50% OFF</span>
        </div>
        <div class="product-rating">
          ${rate}
          <span>(${product.count})</span>
        </div>
      </div>
    </a> 
    `
  });

  // Inject the generated product HTML into the element with ID 'product-container'
  document.querySelector("#product-container").innerHTML = shakoorHTML;
  // Call the function to update the cart quantity (likely showing the number of items in the cart)
  updateCartQuantity();
}

// Select DOM elements for the mobile navigation menu
const openBtn = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const nav = document.querySelectorAll('.js-nav');

// Add event listener for the 'open' button to show the navigation menu
openBtn.addEventListener('click', () => {
  // Add the 'visible' class to make the navigation visible
  nav.forEach(nav => nav.classList.add('visible'));
});

// Add event listener for the 'close' button to hide the navigation menu
closeBtn.addEventListener('click', () => {
  // Remove the 'visible' class to hide the navigation
  nav.forEach(nav => nav.classList.remove('visible'));
});

// Initialize Swiper (for the image carousel or slideshow)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});