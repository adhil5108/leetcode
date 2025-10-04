/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let count = new Set()

    for (let x of sentence) {
        if (x >= "a" && x <= "z") {
            count.add(x)
        }
    }
    return count.size == 26
};