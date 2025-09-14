/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
     let nn=String(n).split("")
    let su=nn.map((e)=>Number(e))
    let sum=su.reduce((s,i)=>s+i)
    let prod=nn.reduce((s,i)=>s*i)
    return prod-sum
};