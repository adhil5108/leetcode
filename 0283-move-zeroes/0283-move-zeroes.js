/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let x of nums){
       if(x===0){
        nums.splice(nums.indexOf(x),1)
        nums.push(x)
       }
    }

}