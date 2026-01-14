class Solution {
    public String[] divideString(String s, int k, char fill) {
        List<String> retu = new ArrayList<>();
        for (int i = 0; i < s.length(); i += k) {
            if (i + k <= s.length()) {
                retu.add(s.substring(i, i + k));
            }
            else {
                retu.add(s.substring(i)); 
            }
        }
        
        if ( retu.get(retu.size() - 1).length() != k) {
            String lastOne = retu.remove(retu.size() - 1);
            for (int i = lastOne.length(); i < k; i++) {
                lastOne = lastOne + fill;
            }
            retu.add(lastOne);
        }
        return retu.toArray(new String[0]);
    }
}
