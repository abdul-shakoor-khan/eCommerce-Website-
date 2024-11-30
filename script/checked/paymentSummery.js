// Import necessary modules and functions from external files
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { currancyFormatRound } from "../utils/money.js";

// Function to render the payment summary
export function renderPaymentSummery() {
  // Initialize variables to hold the total prices for products and shipping
  // Total price of all products in the cart
  let productPrice = 0;
  // Total shipping cost for the items in the cart
  let shippingPrice = 0;

  // Loop through each item in the cart to calculate the total prices
  cart.forEach((cartItem) => {
    // Get product details using the productId
    const product = getProduct(cartItem.productId);
    // Add product price multiplied by its quantity to the total product price
    productPrice += product.price * cartItem.quantity;
    // Get delivery option details using the deliveryOptionId
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    // Add the shipping cost for this product to the total shipping price
    shippingPrice += deliveryOption.price;
  });

  // Calculate the total price before tax (sum of product price and shipping price)
  const totalBeforeTex = productPrice + shippingPrice;
  // Calculate the tax (10% of the total before tax)
  const tex = totalBeforeTex * 0.1;
  // Calculate the final total (total before tax + tax)
  const total = totalBeforeTex + tex;
  // Total item in cart
  const item = cart.length;

  // Generate the HTML for the payment summary
  let paymentSummeryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>
    <div class="payment-summary-row">
      <div>Items (${item}):</div>
      <div class="payment-summary-money">$${currancyFormatRound(productPrice)}</div>
    </div>
    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money money">$${currancyFormatRound(shippingPrice)}</div>
    </div>
    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${currancyFormatRound(totalBeforeTex)}</div>
    </div>
    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${currancyFormatRound(tex)}</div>
    </div>
    <div class="payment-summary-row total-row">
      <div class="total">Order total:</div>
      <div class="payment-summary-money total">$${currancyFormatRound(total)}</div>
    </div>
    <div class="payment-summary-checkbox">
      Use PayPal
      <input type="checkbox">
    </div>
    <div class="payment-buttons">
      <button class="place-order-button button-primary">
        Place your order
      </button>
      <button class="place-order-button debit-card">
        <i class="ri-bank-card-line"></i>
        Debit or Credit Card
      </button>
    </div>
  `;
  // Insert the generated HTML into the payment summary container in the DOM
  document.querySelector('#payment-summary').innerHTML = paymentSummeryHTML;
}