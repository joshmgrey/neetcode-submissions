class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const tracker = new Map();
        for (const num of nums) {
            if (tracker.has(num)) {
                return true
            } else {
                tracker.set(num, 1);
            }
        }
        return false
    }
}
