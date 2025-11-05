import java.util.*;
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        for(int i =0 ;i<nums.length;i++){
            if(i==nums.length-1){continue;}
           if(nums[i]==nums[i+1]){
            return true;
           }
        }
        return false;
    }
}