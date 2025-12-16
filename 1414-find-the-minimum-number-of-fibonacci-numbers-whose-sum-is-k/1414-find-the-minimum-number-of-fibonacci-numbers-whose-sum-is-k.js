/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {

    let fib = [1, 1];

    for (let i = 2; fib[fib.length-1] <= k; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    let count = 0;

    let kk = k;

    let i = fib.length-1;
    while (kk != 0) {
        if (fib[i] <= kk) {
            count++;
            kk = kk - fib[i];
        }
        i--;
    }
 
    return count;
};