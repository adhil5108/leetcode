/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   const unique1=new Set(nums)
   const unique=[...unique1]
   unique.sort((a,b)=>{return b-a});
   return unique.length>=3?unique[2]:unique[0]
};