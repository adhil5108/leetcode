/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    while (nums.length > 0) {
     
        let aliceMinIndex = nums.indexOf(Math.min(...nums));
        let aliceNum = nums.splice(aliceMinIndex, 1)[0];

    
        let bobMinIndex = nums.indexOf(Math.min(...nums));
        let bobNum = nums.splice(bobMinIndex, 1)[0];

        arr.push(bobNum);
        arr.push(aliceNum);
    }

    return arr;
};

