export function ifTherePairThatSumsTarget(
    arr: number[],
    target: number
): boolean {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) return true
        if (sum > target) {
            right--
        } else {
            left++
        }
    }

    return false
}
