class Solution {
    public String addSpaces(String s, int[] spaces) {
        StringBuilder ret = new StringBuilder();
        int jj = 0;
        for (int i = 0; i < s.length(); i++) {
            if (jj < spaces.length) {
                if (i == spaces[jj]) {
                    ret.append(" ");
                    jj++;
                }
            }
            ret.append(s.charAt(i));
        }

        return ret.toString();
    }
}