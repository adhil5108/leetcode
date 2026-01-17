// class Solution {
//     public int[] searchRange(int[] nums, int target) {
//         List<Integer> list = new ArrayList<>();
//         for (int n : nums) {
//             list.add(n);
//         }

//         int firstindex = list.indexOf(target);
//         int lastindex = list.lastIndexOf(target);

//         int[] ret = new int[] { firstindex, lastindex };

//         return ret;

//     }
// }

class Solution {
    public int[] searchRange(int[] nums, int target) {
        if (nums.length == 0) {
            return new int[] { -1, -1 };
        }
        int[] ret = { -1, -1 };

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                ret[0] = i;
                break;
            }
        }

        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] == target) {
                ret[1] = i;
                break;
            }
        }
        return ret;
    }
}