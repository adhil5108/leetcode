/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let arr = String(num).split("").map((e) => Number(e));
    let index = -1;
    let arrr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            continue;
        }
        else {
            index = i;
            break;
        }
    }
    if(index==-1){return "";}
    for (let j = 0; j <= index; j++) {
        arrr.push(arr[j]);
    }
    return arrr.join("");
};