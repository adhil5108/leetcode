/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
let c=s.trim().split(" ")
return c[c.length-1].length
};