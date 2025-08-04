/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
nums.sort((a,b)=>a-b)
let e=nums[Math.floor(nums.length/2)]
return e
};