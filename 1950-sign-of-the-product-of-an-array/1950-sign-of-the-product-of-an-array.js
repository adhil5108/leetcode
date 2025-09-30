/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let numss=nums.reduce((s,i)=>s*i,1)
    if(numss<0){
        return -1
    }
    else if(numss>0){
        return 1
    }
    else if(numss==0){
        return 0
    }
    else{return 0 }
};