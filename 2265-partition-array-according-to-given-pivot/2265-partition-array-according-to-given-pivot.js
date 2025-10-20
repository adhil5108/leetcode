/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let num=nums
    let less = []
    let more = []
    let pivott = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] < pivot) { less.push(num[i]) }
        else if (num[i] > pivot) { more.push(num[i]) }
        else if (num[i] == pivot) { pivott.push(num[i]) }
    }
    return [...less, ...pivott, ...more]
};