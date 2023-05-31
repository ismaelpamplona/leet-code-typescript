export function largestUniqueNumber(nums: number[]): number {
    let ans = -1
    let map: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        const entry = map.get(nums[i]) || 0
        map.set(nums[i], entry + 1)
    }

    console.log(map)

    for (const [key, value] of map) {
        if (value === 1) ans = Math.max(ans, key)
    }

    return ans
}