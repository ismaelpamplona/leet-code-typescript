export function repeatedCharacter(s: string): string {
    const map: Map<string, number> = new Map()

    for (let i = 0; i < s.length; i++) {
        let entry = map.get(s[i]) || 0
        entry += 1
        map.set(s[i], entry)
        if (entry == 2) return s[i]
    }

    return " "
};