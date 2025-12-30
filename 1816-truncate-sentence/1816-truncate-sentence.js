/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let ss = s.split(" ");
    let ret = [];
    for (let i = 0; i < k; i++) {
        ret.push(ss[i]);
    }
    return ret.join(" ");
};