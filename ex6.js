function calculateTotal(basket, prices) {
  let total = 0;

  for (const item in basket) {
    total += basket[item] * prices[item];
  }

  return total;
}

// Example usage
const basket = { apple: 3, bread: 1, milk: 2 };
const prices = { apple: 0.5, bread: 2.25, milk: 1.1 };

console.log(calculateTotal(basket, prices)); // 5.95
if (prices[product] === undefined) {
  throw new Error("No price for " + product);
}