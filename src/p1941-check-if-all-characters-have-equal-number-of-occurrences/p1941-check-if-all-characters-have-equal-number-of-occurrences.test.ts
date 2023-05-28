import { areOccurrencesEqual } from "./p1941-check-if-all-characters-have-equal-number-of-occurrences";


it("case-01", () => {
    const s = "abacbc"
    const result = areOccurrencesEqual(s)
    expect(result).toBe(true)
})

it("case-02", () => {
    const s = "aaabb"
    const result = areOccurrencesEqual(s)
    expect(result).toBe(false)
})


it("case-03", () => {
    const s = "jfdntzwmzrsurunnoezrybmtm"
    const result = areOccurrencesEqual(s)
    expect(result).toBe(false)
})

