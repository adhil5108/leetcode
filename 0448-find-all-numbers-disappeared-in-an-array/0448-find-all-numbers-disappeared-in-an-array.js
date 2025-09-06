/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numss=nums.sort((a,b)=>a-b)
    let d=new Set(numss)
    let c=[]
     for(let i =1;i<=nums.length;i++){
       if(!d.has(i)){
        c.push(i)
       }
     }
     return c
};