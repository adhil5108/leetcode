class Solution {
    public String truncateSentence(String s, int k) {
        String[] ss = s.split(" ");
        String[] ret = new String[k];
        for (int i = 0; i < k; i++) {
            ret[i] = ss[i];
        }
        return String.join(" ", ret);
    }
}