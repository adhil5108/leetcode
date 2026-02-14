/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    // let ss=s.split("");

    // for(let i =0;i<s.length;i++){
    //     if(spaces.includes(i)){
    //         ss.splice(i,1," ");
    //     }
    // }
    // return ss.join("");

    let ret = [];
    let jj = 0;
    for (let i = 0; i < s.length; i++) {
        if (i == spaces[jj]) {
            ret.push(" ");
            j = spaces[jj++];
        }

        ret.push(s[i]);
    }
    return ret.join("");
};