/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0
    for (let x of nums) {
        if (x % 3 != 0) {
            count++
        }
    }
    return count
};