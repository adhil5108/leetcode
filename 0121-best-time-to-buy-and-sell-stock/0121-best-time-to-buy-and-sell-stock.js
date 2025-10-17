/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = 2000000000
  let maxProfit = 0

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else {
        const profit = price - minPrice;
      maxProfit = Math.max(maxProfit, profit)
    }
  }
  return maxProfit;
}
