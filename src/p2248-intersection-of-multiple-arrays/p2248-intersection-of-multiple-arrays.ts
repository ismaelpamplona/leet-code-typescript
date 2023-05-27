export function intersection(nums: number[][]): number[] {
    let result: number[] = []
    let map: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            let entry = map.get(nums[i][j])
            if (entry) {
                map.set(nums[i][j], entry + 1)
            } else {
                map.set(nums[i][j], 1)
            }
        }
    }
    for (const k of map.keys()) {
        let entry = map.get(k)
        if (entry === nums.length) {
            result.push(k)
        }
    }

    result.sort((a, b) => a - b)
    return result
};
