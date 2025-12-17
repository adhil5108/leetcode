class Solution {
    public int findMinFibonacciNumbers(int k) {
         List<Integer> fib = new ArrayList<>(List.of(1,1));

    for (int i = 2; fib.get(fib.size() - 1) <= k; i++) {
        fib.add(fib.get(i-1)+fib.get(i-2));
    }

    int count = 0;

    int kk = k;

    int i = fib.size()- 1;
    while (kk != 0) {
        if (fib.get(i) <= kk) {
            count++;
            kk = kk - fib.get(i);
        }
        i--;
    }
 
    return count;
    }
}