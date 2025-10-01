/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let sing = []
    let doub = []

    for (let x of nums) {
        if (String(x).length > 1) {
            sing.push(x)
        }
        else { doub.push(x) }
    }
    let single = sing.reduce((s, i) => s + i, 0)

    let double = doub.reduce((s, i) => s + i, 0)

    if (single > double || double > single) {
        return true
    }
    else { return false }
};