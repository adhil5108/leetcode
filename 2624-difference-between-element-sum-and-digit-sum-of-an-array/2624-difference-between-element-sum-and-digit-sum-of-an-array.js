/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
let es=nums.reduce((s,i)=> s+i,0)
let num=nums.join("")
let num1=String(num).split("").map((e)=>Number(e))
let ds=num1.reduce((s,i)=>s+i,0)
return Math.abs(es-ds)
};