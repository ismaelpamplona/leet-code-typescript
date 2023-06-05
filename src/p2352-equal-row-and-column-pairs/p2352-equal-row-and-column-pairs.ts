export function equalPairs(grid: number[][]): number {
    let ans = 0
    let cols = structuredClone(grid)
    let map: Map<string, number> = new Map()

    for (let i = 0; i < grid.length; i++) {
        let strKey = grid[i].join("")
        let entry = map.get(strKey)


        if (entry !== undefined) {
            map.set(strKey, entry + 1)
        } else {
            map.set(strKey, 1)
        }

        for (let j = 0; j < grid[i].length; j++) {
            cols[j][i] = grid[i][j]
        }
    }

    for (let i = 0; i < cols.length; i++) {
        let strKey = cols[i].join("")
        let entry = map.get(strKey)

        if (entry !== undefined && entry >= 1) {
            ans += entry
        }

    }

    return ans
}