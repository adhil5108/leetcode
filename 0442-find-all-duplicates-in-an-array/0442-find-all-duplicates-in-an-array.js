/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let e=nums.sort((a,b)=>a-b)
   let c=[]
   for(let i=0;i<nums.length;i++){
    if(e[i]==e[i+1]){
       c.push(e[i])
    }
   }
   return c 
};