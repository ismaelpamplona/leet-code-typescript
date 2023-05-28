export function areOccurrencesEqual(s: string): boolean {
    let map: Map<string, number> = new Map()

    for (let i = 0; i < s.length; i++) {
        let entry = map.get(s[i])
        if (entry) {
            map.set(s[i], entry + 1)
        } else {
            map.set(s[i], 1)
        }
    }

    const frequencies: Set<number> = new Set(map.values())
    return frequencies.size == 1
}