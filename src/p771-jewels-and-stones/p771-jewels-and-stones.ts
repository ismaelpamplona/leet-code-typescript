export function numJewelsInStones(jewels: string, stones: string): number {
    let ans = 0
    let set: Set<string> = new Set()

    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i])
    }

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) ans++

    }

    return ans
}