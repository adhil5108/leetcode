/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (String(i).length % 2 != 0) {
            continue;
        }

        let len = String(i).length;
let ss = String(i).slice(0, len / 2).split("").map((e) => Number(e)).reduce((a, b) =>  a + b , 0);
let sss = String(i).slice(len / 2).split("").map((e) => Number(e)).reduce((a, b) =>  a + b , 0);
        if (ss == sss) { count++; }

    }
    return count;
};