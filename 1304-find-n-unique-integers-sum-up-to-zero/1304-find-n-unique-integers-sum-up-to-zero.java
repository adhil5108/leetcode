class Solution {
    public int[] sumZero(int n) {
        List<Integer> res = new ArrayList<>();
        for (int i = 1; i <= Math.floor(n / 2); i++) {
            res.add(i);
            res.add(-i);
        }
        if (n % 2 == 1) {
            res.add(0);
        }
        int[] arr = new int[res.size()];
        for (int i = 0; i < res.size(); i++) {
            arr[i] = res.get(i);
        }
        return arr;

    }
}