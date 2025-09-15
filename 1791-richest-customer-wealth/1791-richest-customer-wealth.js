/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let s=[]
    for(let x of accounts){
         s.push(x.reduce((s,i)=>s+i))
    }
   let e =s.sort((a,b)=>b-a)
   return e[0]
};