export function moveZeroes(nums: number[]) {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++
        }

    }

    // optimal
    // time complexity: O(n)
    // space complexity: O(1)
}