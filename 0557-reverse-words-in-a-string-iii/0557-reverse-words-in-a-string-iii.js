/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ss=s.split(" ")
    let e=[]
    for(let x of ss){
    e.push(x.split("").reverse().join(""))
    }
    return e.join(" ")
};