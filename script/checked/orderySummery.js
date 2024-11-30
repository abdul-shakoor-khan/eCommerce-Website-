// Import necessary modules and functions from external files
import { cart, addToCart, removeFromCart, updateCartQuantity, updateDeliveyOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummery } from "./paymentSummery.js";
import { currancyFormat } from "../utils/money.js";

// Main function to render the order summary page
export function renderOrderSummary() {
  // This will store the HTML structure for the delivery section
  let deliveryHTML = "";

  // Loop through each item in the cart to render its details
  cart.forEach((cartItem) => {
    // Get product ID from the cart item
    const productId = cartItem.productId;
    // Get product details from products.js
    let matchingProduct = getProduct(productId);
    // Delivery quantity options (1 to 10)
    let deliveryQuantity = "";
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(quantity => {
      deliveryQuantity += `<option value="${quantity}">${quantity}</option>`
    });
    // Get delivery option ID from the cart item
    let deliveryOptionId = cartItem.deliveryOptionId;
    // Get delivery option details from deliveryOptions.js
    let deliveryOption = getDeliveryOption(deliveryOptionId);
    // Calculate the estimated delivery date based on the selected delivery option
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dataString = deliveryDate.format('dddd, MMMM, D');

    // Construct the HTML for the delivery section of the order summary
    deliveryHTML += `
  <div class="delivery-product"
   id="deliver-product-${matchingProduct.id}">
    <h2 class="delivery-h2">
      Delivery date: ${dataString}
    </h2>
    <div class="delivery-details">
      <div class="delivery-image">
        <img src="${matchingProduct.mainImage}"
          alt="checkout-image">
      </div>
      <div class="delivery-productDetails" id="delivery-productDetails">
        <p class="productDetails-title">
          ${matchingProduct.name}
        </p>
        <p class="productDetails-price">
          $${currancyFormat(matchingProduct.price)}
        </p>
        <p class="productDetail-stock">
          Shipping fee applies to this item.
        </p>
        <div class="delivery-quantity">
          Quantity:
          <span class="delivery-count" id="delivery-count">
          ${cartItem.quantity}
          </span>
          <span class="delivery-slash">|</span>
          <select class="delivery-quantity-select none" id="delivery-quantity-select" data-product-id = "${matchingProduct.id}">
            ${deliveryQuantity}
          </select>
          <button class="delivery-update chBtn" id="delivery-update">Update</button>
          <span class="delivery-slash">|</span>
          <button class="delivery-delete chBtn" id="delete" data-product-id="${matchingProduct.id}">
            Delete
          </button>
          <span class="delivery-slash">|</span>
          <button class="delivery-save chBtn">Save</button>
        </div>
      </div>
      <div class="delivery-options delOption-main">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
          ${deliveryOptionHTML(matchingProduct, cartItem)}
      </div>
    </div>
  </div>
  `
  });

  // Function to render available delivery options for each product
  function deliveryOptionHTML(matchingProduct, cartItem) {
    let html = '';
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const dataString = deliveryDate.format('dddd, MMMM, D');
      const price = deliveryOption.price === 0 ? 'FREE' : `$${deliveryOption.price} - `;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      // Generate HTML for each delivery option
      html += `
        <div class="delivery-option" id="delivery-option" data-product-id = "${matchingProduct.id}" data-delivery-option-id = "${deliveryOption.id}">
          <input type="radio" 
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dataString}
            </div>
            <div class="delivery-option-price">
              ${price} Shipping
            </div>
          </div>
        </div>
      `
    });
    return html;
  }

  // Inject the generated HTML into the DOM
  document.querySelector('#delivery-content').innerHTML = deliveryHTML;

  // Event listener for "Delete" buttons (remove product from cart)
  document.querySelectorAll('#delete').forEach(delet => {
    delet.addEventListener('click', () => {
      const productId = delet.dataset.productId;
      // Remove product from the cart
      removeFromCart(productId);
      const container = document.querySelector(`#deliver-product-${productId}`);
      // Remove the product from the DOM
      container.remove();
      // Re-render payment summary
      renderPaymentSummery();
      // Update cart quantity
      updateCartQuantity();
    });
  });

  // Event listener for "Update" buttons (show quantity selector)
  document.addEventListener('click', () => {
    // Event listener for "Update" buttons
    document.querySelectorAll('#delivery-update').forEach(button => {
      button.addEventListener('click', function () {
        const parentDiv = this.closest('#delivery-productDetails');
        const quantitySelect = parentDiv.querySelector('#delivery-quantity-select');
        const countSpan = parentDiv.querySelector('.delivery-count');

        // Show quantity select dropdown and hide the "Update" button
        quantitySelect.classList.remove('none');
        this.style.display = 'none';
      });
    });

    // Event listener for quantity change (update the cart with the new quantity)
    document.querySelectorAll('#delivery-quantity-select').forEach(select => {
      select.addEventListener('change', function () {
        const productId = this.dataset.productId;
        const newQuantity = parseInt(this.value);
        // Update the cart with new quantity
        addToCart(productId, newQuantity);

        const parentDiv = this.closest('#delivery-productDetails');
        const updateQuantity = parentDiv.querySelector('#delivery-count');
        // Update displayed quantity
        updateQuantity.textContent = this.value;

        // Hide the quantity select
        this.classList.add('none');
        const updateButton = parentDiv.querySelector('#delivery-update');
        // Show "Update" button again
        updateButton.style.display = 'inline-block';
        // Update cart quantity
        updateCartQuantity();
        // Re-render payment summary
        renderPaymentSummery();
      });
    });
  });

  // Event listener for selecting a delivery option (update the cart with new delivery option)
  document.querySelectorAll('#delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      const { productId, deliveryOptionId } = element.dataset;
      // Update delivery option in cart
      updateDeliveyOption(productId, deliveryOptionId);
      // Re-render order summary
      renderOrderSummary();
      // Re-render payment summary
      renderPaymentSummery();
    });
  });
}

// Initial function calls to update the cart quantity and render the order summary
updateCartQuantity();
renderOrderSummary();