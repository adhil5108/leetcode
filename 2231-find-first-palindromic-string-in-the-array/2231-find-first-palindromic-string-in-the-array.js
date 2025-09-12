/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let x of words){
        if (x.split('').reverse().join('')==x){
            return x
        }
    }
    return ''
};