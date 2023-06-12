export function numSubarraysWithSum(nums: number[], goal: number): number {
    let ans = 0
    const prefix: number[] = Array(nums.length + 1).fill(0)
    let map: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }

    for (let i = 0; i < prefix.length; i++) {
        ans += map.get(prefix[i]) ?? 0
        let entry = map.get(prefix[i] + goal)
        if (entry) {
            map.set(prefix[i] + goal, entry + 1)
        } else {
            map.set(prefix[i] + goal, 1)
        }
    }

    return ans
}