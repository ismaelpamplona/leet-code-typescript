export function numSubarrayProductLessK(nums: number[], k: number): number {
    if (k <= 1) return 0;

    let ans = 0;
    let currProduct = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currProduct *= nums[right];

        while (currProduct >= k) {
            currProduct /= nums[left];
            left++;
        }

        ans += right - left + 1;
    }
    return ans;
}
