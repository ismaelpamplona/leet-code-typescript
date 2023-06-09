export function canConstructHash(r: string, m: string): boolean {
    let ransomMap: Map<string, number> = new Map()
    let magazineMap: Map<string, number> = new Map()

    for (let i = 0; i < r.length; i++) {
        const entry = ransomMap.get(r[i])

        if (entry !== undefined) {
            ransomMap.set(r[i], entry + 1)
        } else {
            ransomMap.set(r[i], 1)
        }
    }

    for (let i = 0; i < m.length; i++) {
        const entry = magazineMap.get(m[i])

        if (entry !== undefined) {
            magazineMap.set(m[i], entry + 1)
        } else {
            magazineMap.set(m[i], 1)
        }
    }

    Object.entries(magazineMap).forEach(([key, value]) => {
        let entry = ransomMap.get(key)

        if (entry === undefined) {
            return false
        } else if (entry < value) {
            return false
        }
    })

    return true
}
