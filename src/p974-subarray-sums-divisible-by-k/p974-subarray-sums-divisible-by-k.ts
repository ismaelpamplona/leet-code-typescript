export function subarraysDivByK(nums: number[], k: number): number {
    let map: Map<number, number> = new Map()
    map.set(0, 1)
    let ans = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let key = (sum % k + k) % k
        let value = map.get(key)

        if (value !== undefined) {
            ans += value
            map.set(key, value + 1)
        } else {
            map.set(key, 1)
        }
    }

    return ans
}