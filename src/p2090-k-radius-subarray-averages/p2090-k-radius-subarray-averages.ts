export function getAveragesPrefix(nums: number[], k: number): number[] {
    if (k === 0) return nums
    let result: number[] = Array(nums.length).fill(-1)
    if (2 * k + 1 > nums.length) return result
    let prefix: number[] = Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    for (let i = k * 2; i < nums.length; i++) {
        let sum = prefix[i + 1] - prefix[i - (2 * k)]
        let avg = Math.floor(sum / (k * 2 + 1))
        result[i - k] = avg
    }
    return result
}

export function getAveragesSliding(nums: number[], k: number): number[] {
    if (k === 0) return nums
    let result: number[] = Array(nums.length).fill(-1)
    if (2 * k + 1 > nums.length) return result
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let startPos = i - (2 * k)
        if (startPos >= 0) {
            if (startPos > 0) sum -= nums[startPos - 1]
            let avg = Math.floor(sum / (k * 2 + 1))
            result[i - k] = avg
        }
    }
    return result
}