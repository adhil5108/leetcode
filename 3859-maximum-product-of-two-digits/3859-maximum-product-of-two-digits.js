/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let nn = String(n).split("").map((e => Number(e)))
    let nnn = nn.sort((a, b) => b - a)
    return nnn[0]*nnn[1]
};