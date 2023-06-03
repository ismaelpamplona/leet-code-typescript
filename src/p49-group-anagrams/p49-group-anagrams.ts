export function groupAnagrams(strs: string[]): string[][] {
    let map: Map<string, string[]> = new Map()
    for (const s of strs) {
        let key: string = s.split('').sort().join('')
        if (!map.has(key)) {
            map.set(key, [])
        }

        let entry: string[] | undefined = map.get(key)
        if (entry !== undefined) {
            entry.push(s)
            map.set(key, entry)
        }
    }

    let ans: string[][] = []
    for (const group of map.values()) {
        ans.push(group)
    }

    return ans
}