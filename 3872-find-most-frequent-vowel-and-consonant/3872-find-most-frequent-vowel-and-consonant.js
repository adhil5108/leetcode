/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let ss = s.split("");
    let vowel = {}
    let con = {}
    for (let i = 0; i < ss.length; i++) {
        if (ss[i] == "A" || ss[i] == "a" || ss[i] == "E" || ss[i] == "e" || ss[i] == "i" ||
         ss[i] == "I" || ss[i] == "o" || ss[i] == "O" || ss[i] == "u" || ss[i] == "U") {
            vowel[ss[i]] = (vowel[ss[i]]  || 0)+1
        }
        else {
            con[ss[i]] = (con[ss[i]]  || 0)+1
        }
    }
   let cons= Math.max(...Object.values(con),0)
   let vow=Math.max(...Object.values(vowel),0)
   let res=cons+vow
   return res
};