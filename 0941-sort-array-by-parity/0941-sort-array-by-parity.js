/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
   
    let even=[]
    let odd=[]
  for(let x of nums){
    if(x%2==0){
    even.push(x)
    }
    else{
        odd.push(x)
    }
  }
  return [...even,...odd]
};