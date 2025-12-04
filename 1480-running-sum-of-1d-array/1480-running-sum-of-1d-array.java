class Solution {
    public int[] runningSum(int[] nums) {
        List<Integer> arr = new ArrayList<>();
        List<Integer> ret = new ArrayList<>();
        for(int i =0;i<nums.length;i++){
            arr.add(nums[i]);
            int addd = arr.stream().reduce(0,(a,b)->a+b);
            ret.add(addd);
        }
        return ret.stream().mapToInt(i->i).toArray();
    }
}