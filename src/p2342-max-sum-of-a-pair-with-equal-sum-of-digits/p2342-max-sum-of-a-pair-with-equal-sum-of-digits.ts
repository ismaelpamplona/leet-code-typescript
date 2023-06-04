export function maximumSum(nums: number[]): number {

    function getDigitSum(num: number): number {
        let digitSum = 0
        while (num > 0) {
            digitSum += num % 10
            num = Math.floor(num / 10)
        }
        return digitSum
    }

    let ans = -1
    let map: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        let digitSum = getDigitSum(nums[i])
        let entry = map.get(digitSum)

        if (entry !== undefined) {
            ans = Math.max(ans, entry + nums[i])
            map.set(digitSum, Math.max(entry, nums[i]))
        } else {
            map.set(digitSum, nums[i])
        }

    }

    return ans
}