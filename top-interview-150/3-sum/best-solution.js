// https://leetcode.com/problems/3sum
// two pointers

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
        let answer = [];
        
        if (nums.length < 3) {
            return answer;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                break;
            }
            
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let low = i + 1;
            let high = nums.length - 1;
            const target = -nums[i];
            while (low < high) {
                const sum = nums[low] + nums[high];
                if (sum > target) {
                    high--;
                } else if (sum < target) {
                    low++;
                } else {
                    answer.push([nums[i], nums[low], nums[high]]);
                    const lastLowOccurrence = nums[low];
                    const lastHighOccurrence = nums[high];
                    
                    while (low < high && nums[low] === lastLowOccurrence) {
                        low++;
                    }
                    
                    while (low < high && nums[high] === lastHighOccurrence) {
                        high--;
                    }
                }
            }
        }
        return answer;
};

console.log((1,2,3)==(1,2,3));