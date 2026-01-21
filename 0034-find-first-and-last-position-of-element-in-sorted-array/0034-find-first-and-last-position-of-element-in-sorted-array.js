/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ret = [];
    ret.push(nums.indexOf(target));
    ret.push(nums.lastIndexOf(target));

    return ret;
};