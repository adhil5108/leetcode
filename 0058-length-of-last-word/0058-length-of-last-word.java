class Solution {
    public int lengthOfLastWord(String s) {
        String[] c = s.trim().split(" ");
        return c[c.length - 1].length();
    }
}