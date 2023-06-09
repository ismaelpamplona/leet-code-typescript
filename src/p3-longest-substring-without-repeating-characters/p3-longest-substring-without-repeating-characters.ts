export function lengthOfLongestSubstring(s: string): number {
    let map: Map<string, number> = new Map()
    let [ans, l] = [0, 0]

    for (let r = 0; r < s.length; r++) {
        let value = map.get(s[r])
        if (value !== undefined) l = Math.max(l, value + 1)
        ans = Math.max(ans, r - l + 1)
        map.set(s[r], r)
    }

    return ans
}