/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length != goal.length) { return false; }
    else {
        let ss = s;
        for (let i = 0; i < ss.length; i++) {
            ss = ss.slice(1) + ss[0];
            if (ss == goal) { return true; }
        }
    }
    return false;
};