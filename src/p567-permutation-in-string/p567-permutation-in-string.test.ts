import { checkInclusion } from "./p567-permutation-in-string"

it("case-01", () => {
    const s1 = "ab"
    const s2 = "eidbaooo"
    const result = checkInclusion(s1, s2)
    expect(result).toBe(true)
})

it("case-02", () => {
    const s1 = "ab"
    const s2 = "eidboaoo"
    const result = checkInclusion(s1, s2)
    expect(result).toBe(false)
})

it("case-03", () => {
    const s1 = "adc"
    const s2 = "dcda"
    const result = checkInclusion(s1, s2)
    expect(result).toBe(true)
})

it("case-04", () => {
    const s1 = "hello"
    const s2 = "ooolleoooleh"
    const result = checkInclusion(s1, s2)
    expect(result).toBe(false)
})

it("case-05", () => {
    const s1 = "ab"
    const s2 = "a"
    const result = checkInclusion(s1, s2)
    expect(result).toBe(false)
})