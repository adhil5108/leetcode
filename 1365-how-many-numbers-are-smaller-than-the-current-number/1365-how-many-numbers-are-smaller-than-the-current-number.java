class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        List<Integer> arr = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            List<Integer> arrr = new ArrayList<>();
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    arrr.add(nums[j]);
                }
            }
            arr.add(arrr.size());
        }
        return arr.stream().mapToInt(i -> i).toArray();
    }
}