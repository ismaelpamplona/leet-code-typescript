import { wordPattern } from "./p290-word-pattern"

it("case-01", () => {
    const pattern = "abba"
    const s = "dog cat cat dog"
    const result = wordPattern(pattern, s)
    expect(result).toBe(true)
})

it("case-02", () => {
    const pattern = "abba"
    const s = "dog cat cat fish"
    const result = wordPattern(pattern, s)
    expect(result).toBe(false)
})

it("case-03", () => {
    const pattern = "aaaa"
    const s = "dog cat cat dog"
    const result = wordPattern(pattern, s)
    expect(result).toBe(false)
})

it("case-04", () => {
    const pattern = "abba"
    const s = "dog dog dog dog"
    const result = wordPattern(pattern, s)
    expect(result).toBe(false)
})

it("case-05", () => {
    const pattern = "aaa"
    const s = "aa aa aa aa"
    const result = wordPattern(pattern, s)
    expect(result).toBe(false)
})