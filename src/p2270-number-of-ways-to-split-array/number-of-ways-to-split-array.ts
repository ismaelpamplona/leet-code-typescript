export function waysToSplitArray(nums: number[]): number {
    let prefix: number[] = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[i - 1])
    }

    let ans = 0;
    let last = prefix.length - 1
    for (let i = 0; i < last; i++) {
        if (prefix[i] >= (prefix[last] - prefix[i])) ans++
    }
    return ans;

    // time complexity: O(n)
    // space complexity: O(n)
}

export function waysToSplitArray2(nums: number[]): number {

    let total = nums[0];
    for (let i = 1; i < nums.length; i++) {
        total += nums[i];
    }

    let ans = 0;
    let left = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        let right = total - left
        if (left >= right) ans++

    }

    return ans;

    // time complexity: O(n)
    // space complexity: O(1)
}