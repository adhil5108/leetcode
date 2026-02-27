class Solution {
    public int[] productExceptSelf(int[] nums) {

        List<Integer> ret = new ArrayList<>();
        int product = 1;
        int zeroCount = 0;

        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) zeroCount++;
            else product *= nums[i];
        }

        
        for (int i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                ret.add(0);
            }
            else if (zeroCount == 1) {
                ret.add(nums[i] == 0 ? product : 0);
            }
            else {
                ret.add(product / nums[i]);
            }
        }

        
        int[] result = new int[ret.size()];
        for (int i = 0; i < ret.size(); i++) {
            result[i] = ret.get(i);
        }

        return result;
    }
}