class Solution {
    public int maximumWealth(int[][] accounts) {
        int[] h1 = new int[accounts.length];
        for (int i = 0; i < accounts.length; i++) {
            h1[i] = Arrays.stream(accounts[i]).sum();
        }
        Arrays.sort(h1);
        return h1[h1.length-1];
    }
}