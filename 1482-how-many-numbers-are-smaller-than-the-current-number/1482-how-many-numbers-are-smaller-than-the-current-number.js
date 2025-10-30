/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let arr = []
    
    for (let i = 0; i < nums.length; i++) {
        let arrr=[]
        for (let j = 0; j < nums.length; j++) {
            if(nums[i]>nums[j]){
                arrr.push(nums[j])
            }
        }
        arr.push(arrr.length)
    }
    return arr
};