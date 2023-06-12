export function numIdenticalPairs(nums: number[]): number {
    let map: Map<number, number> = new Map()
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        let entry = map.get(nums[i])
        if (entry) {
            ans += entry
            map.set(nums[i], entry + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    return ans
}