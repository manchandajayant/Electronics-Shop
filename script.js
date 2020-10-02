//A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1


function electronicGoods(budget, keyboards, drives) {
  //keyboard is an array of prices
  //drives is an array of prices
  //budget is an itenger
  let arrayOfPrices = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let prices = keyboards[i] + drives[j];
      if (prices <= budget) {
        arrayOfPrices.push(prices);
      }
    }
  }
  let sortedPricesUnderBudget = arrayOfPrices.sort((a, b) => a - b);
  let bestPrice = sortedPricesUnderBudget.pop();
  if (arrayOfPrices.length !== 0) {
    return bestPrice;
  } else {
    return -1;
  }
}

console.log(electronicGoods(10, [3, 1], [5, 2, 8]));