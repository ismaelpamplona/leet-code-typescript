export function wordPattern(pattern: string, s: string): boolean {
    let map: Map<string, string> = new Map()
    let set: Set<string> = new Set()
    let pv: string[] = pattern.split('')
    let sv: string[] = s.split(' ')

    if (pv.length !== sv.length) return false

    for (let i = 0; i < pv.length; i++) {
        let value = map.get(pv[i])

        if (value) {
            if (value !== sv[i]) {
                return false
            }
        } else if (set.has(sv[i])) {
            return false
        } else {
            map.set(pv[i], sv[i])
            set.add(sv[i])
        }
    }

    return true
}