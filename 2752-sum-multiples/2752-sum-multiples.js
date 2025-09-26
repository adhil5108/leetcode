/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let arr = []
    let arr2 = []
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }
    for (let x of arr) {
        if (x % 3 == 0 || x % 5 == 0 || x % 7 == 0) {
            arr2.push(x)
        }
    }
    let sum =arr2.reduce((s,i)=>s+i)
    return sum
};