let totalCost = (basket, prices) =>
  Object.keys(basket).reduce(
    (sum, item) => sum + basket[item] * (prices[item] ?? 0), 0);
    let basket = { apple: 3, pear: 2, bread: 1 };
let prices = { apple: 0.5, pear: 0.75, bread: 2 };

totalCost(basket, prices); // 5