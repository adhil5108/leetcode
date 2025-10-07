/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];
    
    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(operations[i])) {
            arr.push(Number(operations[i]));
        } 
        else if (operations[i] === "+") {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        } 
        else if (operations[i] === "D") {
            arr.push(arr[arr.length - 1] * 2);
        } 
        else if (operations[i] === "C") {
            arr.pop();
        }
    }

    let ert = arr.reduce((a, b) => a + b, 0);
    return ert;
};
