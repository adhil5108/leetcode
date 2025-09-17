/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let s=address.split("")
    for(let i =0;i<s.length;i++){
        if(s[i]=='.'){
            s[i]='[.]'
        }
    }
    return s.join("")
};