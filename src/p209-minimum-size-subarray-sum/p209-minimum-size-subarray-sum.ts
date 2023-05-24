export function minSubArrayLen(target: number, nums: number[]): number {

    let min = nums.length + 1
    let sum = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {

        sum += nums[right]

        while (sum >= target) {
            min = Math.min(right - left + 1, min)
            sum -= nums[left]
            left++
        }
    }

    if (min === nums.length + 1) {
        return 0
    }

    return min
};