export function findLucky(arr: number[]): number {
    let map: Map<number, number> = new Map()
    let ans = -1

    for (let i = 0; i < arr.length; i++) {
        let entry = map.get(arr[i])

        if (entry) {
            map.set(arr[i], entry + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let entry = map.get(arr[i])

        if (entry === arr[i]) ans = Math.max(ans, entry)
    }

    return ans
}