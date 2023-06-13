export function checkInclusion(s1: string, s2: string): boolean {

    if (s1.length > s2.length) return false

    let s1Map = Array(26).fill(0)
    let s2Map = Array(26).fill(0)
    let count = 0

    for (let i = 0; i < s1.length; i++) {
        s1Map[(s1.charCodeAt(i) - 'a'.charCodeAt(0))]++
        s2Map[(s2.charCodeAt(i) - 'a'.charCodeAt(0))]++
    }

    for (let i = 0; i < 26; i++) {
        if (s1Map[i] == s2Map[i]) count++
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        const l = s2.charCodeAt(i) - 'a'.charCodeAt(0)
        const r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)

        if (count === 26) return true

        s2Map[r]++
        if (s2Map[r] === s1Map[r]) {
            count++
        } else if (s2Map[r] === s1Map[r] + 1) {
            count--
        }

        s2Map[l]--
        if (s2Map[l] === s1Map[l]) {
            count++
        } else if (s2Map[l] === s1Map[l] - 1) {
            count--
        }
    }

    return count == 26
}