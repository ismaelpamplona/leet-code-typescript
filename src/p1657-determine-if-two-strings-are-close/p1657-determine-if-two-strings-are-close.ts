export function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false

    let w1Map: number[] = Array(26).fill(0)
    let w2Map: number[] = Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        w1Map[word1[i].charCodeAt(0) - "a".charCodeAt(0)]++
        w2Map[word2[i].charCodeAt(0) - "a".charCodeAt(0)]++
    }

    for (let i = 0; i < 26; i++) {
        if (
            (w1Map[i] === 0 && w2Map[i] > 0) ||
            (w2Map[i] === 0 && w1Map[i] > 0)
        ) return false
    }

    w1Map.sort()
    w2Map.sort()

    return w1Map.toString() === w2Map.toString()
}