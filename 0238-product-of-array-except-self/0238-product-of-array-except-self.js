/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // let ret = [];
    // let values = [];
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i == j) { continue; }
    //         values.push(nums[j]);
    //     }
    //     ret.push(values.reduce((a, b) => a * b, 1));
    //     values=[];
    // }
    // return ret;

    let ret = [];
    let product = 1;
    let zeroCount = 0;

   
    for (let num of nums) {
        if (num == 0) zeroCount++;
        else product *= num;
    }

    for (let num of nums) {
        if (zeroCount > 1) {
            ret.push(0);
        }
        else if (zeroCount == 1) {
            ret.push(num == 0 ? product : 0);
        }
        else {
            ret.push(product / num);
        }
    }

    return ret;

};