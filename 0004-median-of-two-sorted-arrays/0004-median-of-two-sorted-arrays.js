/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n=[...nums1,...nums2].sort((a,b)=>a-b)
    let m=Math.floor(n.length/2)
    if(n.length%2==0){
        return( n[m-1]+n[m])/2
    }
    else{
        return n[m]
    } 
};