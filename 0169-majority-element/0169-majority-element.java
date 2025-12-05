class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> h1 = new HashMap<>();
        double majority=Math.ceil(nums.length/2.0);
    
        for (int i = 0; i < nums.length; i++) {
            h1.put(nums[i],h1.getOrDefault(nums[i],0)+1);
        }
        for(Integer Key : h1.keySet()){
            if(h1.get(Key)>=majority){
               return Key;
            }
        }
      return -1;
    }
}