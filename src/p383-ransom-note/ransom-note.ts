export function canConstructHash(ransomNote: string, magazine: string): boolean {
    let ransomMap: Map<string, number> = new Map()
    let magazineMap: Map<string, number> = new Map()

    for (let i = 0; i < ransomNote.length; i++) {
        const entry = ransomMap.get(ransomNote[i])
        if (entry !== undefined) {
            ransomMap.set(ransomNote[i], entry + 1)
        } else {
            ransomMap.set(ransomNote[i], 1)
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        const entry = magazineMap.get(magazine[i])
        if (entry !== undefined) {
            magazineMap.set(magazine[i], entry + 1)
        } else {
            magazineMap.set(magazine[i], 1)
        }
    }

    for (const [key, value] of ransomMap) {
        let entry = magazineMap.get(key)
        if (entry === undefined) {
            return false
        } else if (entry < value) {
            return false
        }
    }

    return true
}
