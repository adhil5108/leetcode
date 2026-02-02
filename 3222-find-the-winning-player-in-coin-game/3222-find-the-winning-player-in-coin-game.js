/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x, y) {
    let turns = Math.min(x, Math.floor(y / 4));
    if (turns % 2 == 1) {
        return "Alice";
    }
    else {
        return "Bob";
    }
};