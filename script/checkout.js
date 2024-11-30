// Import the renderOrderSummary function from the order summary
import { renderOrderSummary } from "./checked/orderySummery.js";
// Import the renderPaymentSummery function from the payment summary
import { renderPaymentSummery } from "./checked/paymentSummery.js";

// Call the renderOrderSummary function to display the order summary on the page
renderOrderSummary();
// Call the renderPaymentSummery function to display the payment summary on the page
renderPaymentSummery();

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