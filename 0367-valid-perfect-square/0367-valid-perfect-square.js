/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if(num===1){return true}
    for (let i = 2; i < num; i++) {
        if (i* i === num){return true }
    }
    return false
};