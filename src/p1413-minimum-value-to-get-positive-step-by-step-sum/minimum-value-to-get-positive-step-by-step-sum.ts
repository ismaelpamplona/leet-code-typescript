export function minStartValue(nums: number[]): number {
    let minValue = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        minValue = Math.min(minValue, sum)
    }

    return -minValue + 1
}