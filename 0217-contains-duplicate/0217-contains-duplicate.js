/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // const seen = new Set();

    // for (let num of nums) {
    //     if (seen.has(num)) {
    //         return true; 
    //     }
    //     seen.add(num);
    // }

    // return false;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
};
