/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  let a = []
   let e=nums.sort((a,b)=>a-b)
   for(let i =0;i<e.length;i++){
       if(e[i]==e[i+1]){
           a.push(e[i])
       }
   }
   return a

};