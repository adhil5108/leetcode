/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let y = String(x)
    let z = y.split("").reverse().join("")
    return y == z
};