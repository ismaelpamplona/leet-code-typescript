export function isPathCrossing(path: string): boolean {
    const set: Set<string> = new Set()
    set.add('0,0')

    const map: Map<string, [number, number]> = new Map([
        ['N', [0, 1]],
        ['S', [0, -1]],
        ['E', [1, 0]],
        ['W', [-1, 0]],
    ])

    let [x, y] = [0, 0]

    for (let i = 0; i < path.length; i++) {
        const dir = map.get(path[i])
        if (dir) {
            x += dir[0]
            y += dir[1]
            const coordinate = `${x},${y}`

            if (set.has(coordinate)) {
                return true
            }

            set.add(coordinate)
        }
    }

    return false
}
