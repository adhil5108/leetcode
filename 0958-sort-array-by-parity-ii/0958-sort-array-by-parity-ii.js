/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let even=[]
  let odd=[]
  let res=[]
 
for(let x of nums){
    if(x%2==0){
        even.push(x)
    }
    else{odd.push(x)}
    
   
}

let e=0
let o=0
for(let i=0;i<nums.length;i++){
     if(i%2==1){
        res.push(odd[o++])
    }
    else{res.push(even[e++])}
}

return res

};