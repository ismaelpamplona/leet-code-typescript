export function countElements(arr: number[]): number {
    const map: Set<number> = new Set()
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        map.add(arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i] + 1)) {
            ans++
        }
    }

    return ans
};