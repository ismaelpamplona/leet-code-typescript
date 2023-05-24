export function pivotIndex(nums: number[]): number {
    let totalSum = 0;
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        let right_sum = totalSum - leftSum - nums[i]
        if (leftSum == right_sum) {
            return i;
        }
        leftSum += nums[i]
    }

    return -1
};