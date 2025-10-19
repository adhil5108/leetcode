/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let arr = []
    let ret = []

    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i])
        let add = arr.reduce((a,b) => { return a+b }, 0)
        ret.push(add)
    }
    return ret 
};