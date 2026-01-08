class Solution {
    public int secondHighest(String s) {
             List<Integer> nums = new ArrayList<>();

        
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isDigit(ch)) {
                nums.add(ch - '0'); 
            }
        }

        Set<Integer> uniqueSet = new HashSet<>(nums);

        if (uniqueSet.size() <= 1) {
            return -1;
        }

        List<Integer> uniqueList = new ArrayList<>(uniqueSet);
        uniqueList.sort(Collections.reverseOrder());

        
        return uniqueList.get(1);
   

    }
}