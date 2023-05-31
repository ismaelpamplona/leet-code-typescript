export function numberOfSubarraysSw(nums: number[], k: number): number {
    let [ans, count, left, sumOdds] = [0, 0, 0, 0]

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] % 2 === 1) {
            sumOdds++
            count = 0
        }

        while (sumOdds === k) {
            if (nums[left] % 2 === 1) {
                sumOdds--
            }
            left++
            count++
        }
        ans += count
    }
    return ans
};

export function numberOfSubarraysCount(nums: number[], k: number): number {
    let map: Map<number, number> = new Map()
    map.set(0, 1)
    let [ans, currPrefixCount] = [0, 0]

    for (let i = 0; i < nums.length; i++) {
        currPrefixCount += nums[i] % 2
        let value = map.get(currPrefixCount - k)
        if (value !== undefined) {
            ans += value
        }

        value = map.get(currPrefixCount)
        if (value !== undefined) {
            map.set(currPrefixCount, value + 1)
        } else {
            map.set(currPrefixCount, 1)
        }

    }

    return ans

};