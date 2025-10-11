/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let num1 = num
    let count =0
    if(num==0){return 0}
   while (num1>0){
    if(num1%2==0){
        num1=num1/2
        count++
    }
    else if(num1%2==1){
        num1=num1-1
        count++
    }

   }
   return count  
};