// Importing product data and cart utility functions (add to cart and update cart quantity)
import { products } from "../data/products.js";
import { addToCart, updateCartQuantity } from "../data/cart.js";

// Event listener to execute the code after the DOM has been fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Call functions to display product details and product description
  addToProductDetailHTML();
  addToDescription();
});

// Function to generate and add product detail HTML to the page
function addToProductDetailHTML() {
  // Initialize an empty string for the product detail HTML
  let productDetailHTML = "";
  // Get the product ID from the URL
  let productId = new URLSearchParams(window.location.search).get("id");
  let productData;

  // Loop through the products array to find the product with the matching ID
  products.forEach(productDetail => {
    if (productDetail.id === productId) {
      // Store the product data if it matches the ID
      productData = productDetail;
    }
  });

  // If no product data is found, redirect to the homepage
  if (!productData) {
    window.location.href = '/';
    return;
  }

  // Build the HTML for the product images gallery
  let image = "";
  productData.images.forEach(imageSrc => {
    // Add each image to the gallery
    image += `<img src="${imageSrc}">`
  });

  // Build the HTML for the product rating (e.g., stars or other icons)
  let rate = "";
  productData.rating.forEach(rateClass => {
    // Add each rating class (like stars) to the HTML
    rate += `<i class="${rateClass}"></i>`
  });

  // Build the HTML for color options (if the product has multiple colors)
  let productColor = "";
  productData.color.forEach(colorValue => {
    productColor += `
    <input type="radio" id="${colorValue}" name="color" value="color">
    <label for="${colorValue}">${colorValue}</label>
    `
  });

  // Build the HTML for size options (if the product has multiple sizes)
  let productSize = "";
  productData.size.forEach(sizeValue => {
    productSize += `
    <input type="radio" id="${sizeValue}" name="size" value="size">
    <label for="${sizeValue}">${sizeValue}</label>
    `
  });

  // Build the quantity dropdown options (1-10 items)
  let quantityOption = "";
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(quantity => {
    // Create the options for quantity
    quantityOption += `<option value="${quantity}">${quantity}</option>`
  });

  // Assemble the full product detail HTML
  productDetailHTML = `
   <div class="product-gallery">
      <div class="thumbnail-images" id="thumbnail-images">
        ${image}
      </div>
      <div class="main-image" id="main-image">
        <img
          src="${productData.mainImage}"
          alt="Product">
      </div>
    </div>
    <div class="product-details">
      <div class="product-deal">
        Super Deals
      </div>
      <h1 class="product-title">
        ${productData.name}
      </h1>
      <div class="product-rating">
        ${rate}
        <span>(${productData.count} reviews)</span>
      </div>
      <div class="product-beforeTax">
        Price shown before tax (Extra 1% off with coins)
      </div>
      <div class="product-price">
        <span class="current-price">$199.99</span>
        <span class="original-price">$399.99</span>
        <span class="discount">50% OFF</span>
      </div>
      <div class="product-options">
        <div class="option">
          <label class="option-label">Color:</label>
          <div class="colors">
            ${productColor}
          </div>
        </div>
        <div class="option">
          <label class="option-label">Size:</label>
          <div class="sizes">
            ${productSize}
          </div>
        </div>
      </div>

      <div class="product-quantity">
        Quantity:
        <select class="product-quantity-select" id="product-quantity-select" data-product-id = "${productData.id}">
        ${quantityOption}
        </select>
      </div>
      <div class="product-btn">
        <button class="product-button add-to-cart" id="addTo-cart" data-product-id = "${productData.id}">Add to Cart</button>
        <button class="product-button buy-now">Buy Now</button>
      </div>

    </div>
    <div class="product-information">
      <div class="product-shipping">
        <h2 class="product-shipping-h2">
          <span class="product-shipping-h2-icon">
            <i class="ri-space-ship-line"></i>
          </span>
          Free Shipping
        </h2>
        <p class="product-shipping-para">
          Enjoy free shipping on all orders with no minimum purchase. Get your favorite products delivered straight
          to your door at no extra cost!
        </p>
      </div>
      <div class="product-security">
        <h2 class="product-security-h2">
          <span class="product-security-h2-icon">
            <i class="ri-secure-payment-line"></i>
          </span>
          Security & Privacy
        </h2>
        <p class="product-security-para">
          Safe payments: We do not share your personal details with any third parties without your consent.
        </p>
        <p class="product-security-para">
          Secure personal details: We protect your privacy and keep your personal details safe and secure.
        </p>
      </div>
      <div class="product-deliveryReturn">
        <h2 class="product-deliveryReturn-h2">
          <span class="product-deliveryReturn-h2-icon">
            <i class="ri-text-wrap"></i>
          </span>
          Delivery & Retruns
        </h2>
        <p class="product-deliveryReturn-para">
          Your orders are shipped from Pakistan, ensuring delivery within 2 to 7 days to your doorstep.
        </p>
        <p class="product-deliveryReturn-para">
          Shop confidently with our 15-day return policy, making returns easy and stress-free.
        </p>
      </div>
    </div>
  `;

  // Insert the generated HTML into the product container on the page
  document.querySelector("#product-container").innerHTML = productDetailHTML;

  // Add event listeners to the 'Add to Cart' buttons
  document.querySelectorAll("#addTo-cart").forEach(button => {
    button.addEventListener('click', () => {
      // Get the product ID from the button's data attribute
      const productId = button.dataset.productId;
      // Get the selected quantity from the dropdown
      const quantityElement = document.querySelector(
        `#product-quantity-select[data-product-id="${productData.id}"`
      );
      // Parse the quantity as an integer
      const selectedQuantity = parseInt(quantityElement.value);

      // Add the selected product and quantity to the cart
      addToCart(productId, selectedQuantity);
      // Update the cart quantity in the UI
      updateCartQuantity();

    });
  });

  // Get all thumbnail images for the product gallery
  const thumbnails = document.querySelectorAll("#thumbnail-images img");
  // Get the main image element
  const mainImage = document.querySelector("#main-image img");
  // Add click event listeners to all thumbnail images
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      // When a thumbnail is clicked, change the src of the main image to match the clicked thumbnail
      mainImage.src = this.src;
    });
  });

  // Update the cart quantity display when the page loads
  updateCartQuantity();

}


// Function to generate and add product description images to the page
function addToDescription() {
  let productDescription = "";
  // Get the product ID from the URL
  let productId = new URLSearchParams(window.location.search).get("id");
  let productData;

  // Loop through the products array to find the product with the matching ID
  products.forEach(productDetail => {
    if (productDetail.id === productId) {
      productData = productDetail;
    }
  });

  // If no product data is found, redirect to the homepage
  if (!productData) {
    window.location.href = '/';
    return;
  }

  // Display only the first 4 images from the product's image array
  // Initialize a variable to store the HTML for images
  let desImage = "";
  // Get the first 4 images (starting from index 1 to 4)
  let imagesToShow = productData.images.slice(1, 5);

  // Loop through the images and create image tags for each
  imagesToShow.forEach(imageSrc => {
    // Append each image to the description string
    desImage += `<img src="${imageSrc}">`;
  });

  // Build the final HTML structure for the product description
  productDescription = `
    <div class="dc-main-img">
      <img src="${productData.mainImage}" alt="image">
    </div>
    <div class="dc-images">
      ${desImage}
    </div>
  `;

  // Add the generated product description HTML to the page container with id 'des-container'
  document.querySelector("#des-container").innerHTML = productDescription;
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
