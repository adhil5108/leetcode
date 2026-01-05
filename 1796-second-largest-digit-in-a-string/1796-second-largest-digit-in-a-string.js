/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let nums = [];
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) >= 0 || Number(s[i]) <= 9) {
            nums.push(Number(s[i]));
        }
    }
    
    const numss = [...new Set(nums)];
    if (numss.length <= 1) {
        return -1;
    }
    numss.sort((a, b) => b-a);
    console.log(nums);
    return numss[1];
};