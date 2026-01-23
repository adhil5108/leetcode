class Solution {
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        String ss = "";

        for (int i = 0; i < s.length(); i++) {
            if (ss.contains(s.charAt(i) + "")) {
                max = Math.max(max, ss.length());
                ss = ss.substring(ss.indexOf(s.charAt(i)) + 1); 
            }
            ss += s.charAt(i);
        }

        return Math.max(max, ss.length());
    }
}
