/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    if(nums.reduce((a,b)=>a-b)%2==0){
        return nums.length-1;
    }
    else{
        return 0;
    }
};