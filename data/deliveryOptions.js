// Array of delivery options, each containing an id, number of delivery days, and price
export const deliveryOptions = [
  {
    // Unique identifier for the delivery option
    id: '1',
    // Number of days it will take to deliver
    deliveryDays: 7,
    // Price of the delivery option (free delivery)
    price: 0,
  },
  {
    // Unique identifier for the delivery option
    id: '2',
    // Number of days it will take to deliver
    deliveryDays: 3,
    // Price of the delivery option (499 units of currency)
    price: 499,
  },
  {
    // Unique identifier for the delivery option
    id: '3',
    // Number of days it will take to deliver
    deliveryDays: 1,
    // Price of the delivery option (999 units of currency)
    price: 999,
  },
];

// Function to get a delivery option based on the deliveryOptionId provided
export function getDeliveryOption(deliveryOptionId) {
  // Declare a variable to store the selected delivery option
  let deliveryOption;
  // Loop through all available delivery options
  deliveryOptions.forEach((option) => {
    // If the current option's id matches the provided deliveryOptionId, assign it to deliveryOption
    if (deliveryOptionId === option.id) {
      deliveryOption = option;
    }
  });
  // Return the found delivery option, or return the first delivery option if no match is found
  return deliveryOption || deliveryOption[0];
}