export function longestOnes(nums: number[], k: number): number {
    let ans = 0
    let left = 0
    let zero_count = 0

    for (let right = 0; right < nums.length; right++) {
        ans++

        if (nums[right] == 0) zero_count++

        if (zero_count > k) {
            ans--
            if (nums[left] == 0) {
                zero_count--
            }
            left++
        }

    }
    return ans
}