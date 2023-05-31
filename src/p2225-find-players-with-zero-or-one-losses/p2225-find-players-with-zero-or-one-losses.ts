export function findWinners(matches: number[][]): number[][] {
    let noLost: number[] = []
    let oneLost: number[] = []
    let map: Map<number, number> = new Map()

    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0]
        let loser = matches[i][1]

        const winnerEntry = map.get(winner) || 0
        map.set(winner, winnerEntry)

        const loserEntry = map.get(loser) || 0
        map.set(loser, loserEntry + 1)
    }

    for (const [key, value] of map) {
        if (value === 0) {
            noLost.push(key)
        } else if (value === 1) {
            oneLost.push(key)
        }
    }

    noLost.sort((a, b) => a - b)
    oneLost.sort((a, b) => a - b)
    return [noLost, oneLost]
}