class Solution {
    public int search(int[] nums, int target) {
        List<Integer> ret = new ArrayList<>();
        for (int n : nums) {
            ret.add(n);

        }
     return ret.indexOf(target);
    }
}