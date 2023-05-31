export function subarraySum(nums: number[], k: number): number {
    const map: Map<number, number> = new Map()
    map.set(0, 1)
    let ans = 0
    let prefix = 0

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i]

        let entry = map.get(prefix - k)
        if (entry !== undefined) {
            ans += entry
        }

        entry = map.get(prefix)
        if (entry !== undefined) {
            map.set(prefix, entry + 1)
        } else {
            map.set(prefix, 1)
        }
    }

    return ans
};