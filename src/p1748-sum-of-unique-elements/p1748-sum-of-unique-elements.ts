export function sumOfUnique(nums: number[]): number {
    let map: Map<number, number> = new Map()
    let ans = 0

    for (let i = 0; i < nums.length; i++) {
        let entry = map.get(nums[i])

        if (entry) {
            map.set(nums[i], entry + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let entry = map.get(nums[i])

        if (entry && entry === 1) ans += nums[i]
    }

    return ans
}