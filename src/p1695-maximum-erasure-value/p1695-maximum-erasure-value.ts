export function maximumUniqueSubarray(nums: number[]): number {
    let [l, ans, curSum] = [0, 0, 0]
    let set: Set<number> = new Set()

    for (let r = 0; r < nums.length; r++) {
        while (set.has(nums[r]) && l < r) {
            set.delete(nums[l])
            curSum -= nums[l]
            l++
        }
        curSum += nums[r]
        set.add(nums[r])
        ans = Math.max(ans, curSum)
    }

    return ans
}