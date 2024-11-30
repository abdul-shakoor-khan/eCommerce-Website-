// Attempt to retrieve the cart from localStorage. If it doesn't exist, initialize with a default cart.
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  // Default cart with two items if no cart is found in localStorage
  cart = [
    {
      productId: "2f81b31e-07e6-4a5e-80b4-9c781c1f1f02",
      quantity: 1,
      // Default delivery option for the first item
      deliveryOptionId: '1',
    },
    {
      productId: "b9a982c2-d9e5-43e4-91c3-e67de5c840a9",
      quantity: 3,
      // Default delivery option for the second item
      deliveryOptionId: '2',
    }
  ];
  // Save the default cart to localStorage
  saveToStorage();
}


// Save the default cart to localStorage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add a product to the cart or update its quantity if it already exists
export function addToCart(productId, selectedQuantity) {
  let matchingItem;
  // Loop through the cart to find if the product is already in the cart
  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    // If the product exists, update the quantity
    matchingItem.quantity = selectedQuantity;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.push({
      productId: productId,
      quantity: selectedQuantity,
      // Default delivery option for new items
      deliveryOptionId: "1"
    });
  };

  // Save the updated cart to localStorage
  saveToStorage();
  // Log the updated cart for debugging purposes
  // console.log(cart);
}

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });

  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0); // We can use reduce to calculate total quantity
    cartCountElement.innerHTML = cartQuantity;
    saveToStorage();
  } else {
    console.warn('Cart count element not found');
  }
}

// Function to remove a product from the cart by its productId
export function removeFromCart(productId) {
  const newCart = [];
  // Loop through the cart and add all items except the one to be removed
  cart.forEach(cartItem => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  });

  // Replace the original cart with the new cart (after removal)
  cart = newCart;
  // Save the updated cart to localStorage
  saveToStorage();
}

// Function to update the delivery option of a product in the cart
export function updateDeliveyOption(productId, deliveryOptionId) {
  let matchingProduct;
  // Loop through the cart to find the product by productId
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    // Update the delivery option for the matched product
    matchingProduct.deliveryOptionId = deliveryOptionId;
  } else {
    // Log an error if the product was not found in the cart
    console.error('Product not found');
  }

  // Save the updated cart to localStorage
  saveToStorage();
}
