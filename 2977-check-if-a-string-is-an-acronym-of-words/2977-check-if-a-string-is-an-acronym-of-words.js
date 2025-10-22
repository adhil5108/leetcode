/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let ss=""
    for(let x of words){
        ss=ss+x[0]
    }
return ss==s
};