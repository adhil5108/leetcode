/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let ret = [];
    for (let i = 0; i < s.length; i += k) {
        ret.push(s.slice(i, i + k));   
    }
    if (ret[ret.length - 1].length != k) {
        let lastone = ret.pop();
        for (let i = lastone.length; i < k; i++) {
            lastone=lastone+fill;
        }
        ret.push(lastone);
    }
    return ret;
};