/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
 while(num>=10){
    num=String(num).split('').reduce((s,i)=>s+Number(i),0)
 }
 return num
}