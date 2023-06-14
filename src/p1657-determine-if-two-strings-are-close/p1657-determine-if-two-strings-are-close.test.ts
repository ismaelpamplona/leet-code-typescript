import { closeStrings } from "./p1657-determine-if-two-strings-are-close"

it("case-01", () => {
    const word1 = "abc"
    const word2 = "bca"
    const result = closeStrings(word1, word2)
    expect(result).toBe(true)
})

it("case-02", () => {
    const word1 = "a"
    const word2 = "aa"
    const result = closeStrings(word1, word2)
    expect(result).toBe(false)
})

it("case-03", () => {
    const word1 = "cabbba"
    const word2 = "abbccc"
    const result = closeStrings(word1, word2)
    expect(result).toBe(true)
})