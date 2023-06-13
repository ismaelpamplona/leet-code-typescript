export function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) return false

    let map: Map<string, string> = new Map()
    let set: Set<string> = new Set()

    for (let i = 0; i < s.length; i++) {
        const value = map.get(s[i])

        if (value !== undefined) {
            if (value.toString() !== t[i]) return false
        } else if (set.has(t[i])) {
            return false
        } else {
            map.set(s[i], t[i])
            set.add(t[i])
        }
    }

    return true
}