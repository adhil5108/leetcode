/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let ss = "";

    for (let i = 0; i < s.length; i++) {
        if (ss.includes(s[i] + "")) {
            max = Math.max(max, ss.length);
            ss = ss.substring(ss.indexOf(s.charAt(i)) + 1);
        }
        ss += s[i];
    }

    return Math.max(max, ss.length);
};