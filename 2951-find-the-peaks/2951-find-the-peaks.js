/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    let ret = [];
    for (let i = 0; i < mountain.length; i++) {
        if (i == 0 || i == mountain.length - 1) { continue; }
        else if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            ret.push(i);
        }
    }
    return ret;
};