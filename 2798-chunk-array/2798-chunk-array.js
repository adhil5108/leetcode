/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res=[]
    for(let i=0;i<arr.length;i=i+size){
        let c=arr.slice(i,i+size)
        res.push(c)
    }
    return res

};
