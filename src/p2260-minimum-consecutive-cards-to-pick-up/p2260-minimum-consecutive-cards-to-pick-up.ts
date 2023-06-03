export function minimumCardPickup(cards: number[]): number {
    let map: Map<number, number[]> = new Map()
    let ans = cards.length
    let possible = false
    for (let i = 0; i < cards.length; i++) {
        let entry = map.get(cards[i])

        if (entry !== undefined) {
            entry.push(i)
            map.set(cards[i], entry)
        } else {
            map.set(cards[i], [i])
        }

        if (entry?.length === 2) {
            ans = Math.min(ans, entry[1] - entry[0] + 1)
            map.set(cards[i], [entry[1]])
            possible = true
        }

    }

    if (possible) return ans
    return -1
}