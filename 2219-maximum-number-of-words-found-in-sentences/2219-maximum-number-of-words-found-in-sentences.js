/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   let num=[]
   for(let x of sentences){
    let e=x.split(' ')
    num.push(e.length)
   }
   let b=num.sort((a,b)=>b-a)
   return b[0]
};