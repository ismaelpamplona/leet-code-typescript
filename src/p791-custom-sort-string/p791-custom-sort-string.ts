export function customSortString(order: string, s: string): string {
    let map: Map<string, number> = new Map()
    let ans = ""

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < order.length; i++) {
        const key = order[i]
        const freq = map.get(key)

        if (freq) {
            ans += key.repeat(freq)
            map.delete(key)
        }
    }

    for (let [c, freq] of map.entries()) {
        ans += c.repeat(freq)
    }

    return ans
}