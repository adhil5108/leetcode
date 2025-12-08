/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let ret = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j == i) { continue; }
            if(words[i].includes(words[j])){
                ret.push(words[j]);
            }
        }
    }
    let retu=[];
    ret.sort();
    for(let i = 0;i<ret.length;i++){
        if(ret[i]==ret[i+1]){
            continue;
        }
        retu.push(ret[i]);
    }
    return retu;
};