export function equalSubstring(s: string, t: string, maxCost: number): number {
    let currCost = 0
    let currLen = 0
    let maxLen = 0
    let left = 0

    for (let right = 0; right < s.length; right++) {
        currCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))
        currLen++

        while (currCost > maxCost) {
            currCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
            currLen--
            left++
        }

        maxLen = Math.max(maxLen, currLen)
    }

    return maxLen
};