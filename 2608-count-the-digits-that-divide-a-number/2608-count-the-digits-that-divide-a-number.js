/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0

    let nums = String(num).split("")
    let numss = nums.map((e) => Number(e))

    for (let x of numss) {
        if (num % x == 0) {
            count=count+1
        }
    }
return count 
};