export function checkSubarraySum(nums: number[], k: number): boolean {
    let map: Map<number, number> = new Map()
    map.set(0, 0)
    let sum = 0

    for (let right_index = 0; right_index < nums.length; right_index++) {
        sum += nums[right_index]
        let left_index = map.get(sum % k)

        if (left_index !== undefined) {
            if (left_index < right_index) {
                return true
            }
        } else {
            map.set(sum % k, right_index + 1)
        }

    }

    return false
}