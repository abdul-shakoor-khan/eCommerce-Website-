// Function to format currency by rounding the product to the nearest whole unit and converting it to a fixed 2-decimal string
export function currancyFormatRound(product) {
  // Divide the product by 100 to convert from cents (or smallest unit) to main currency units
  // Then round the result to the nearest integer and ensure it's displayed with 2 decimal places

  return (Math.round(product / 100).toFixed(2));
}

// Function to format currency by dividing the product by 100 and displaying it with 2 decimal places
export function currancyFormat(product) {
  // Divide the product by 100 to convert from cents (or smallest unit) to main currency units
  // Ensure the result is displayed with exactly 2 decimal places
  return (product / 100).toFixed(2);
}
