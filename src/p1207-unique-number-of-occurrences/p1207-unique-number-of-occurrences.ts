export function uniqueOccurrences(arr: number[]): boolean {
    let map: Map<number, number> = new Map()

    for (let i = 0; i < arr.length; i++) {
        let entry = map.get(arr[i])
        if (entry) {
            map.set(arr[i], entry + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    const set: Set<number> = new Set(Array.from(map.values()))

    return set.size == map.size
}