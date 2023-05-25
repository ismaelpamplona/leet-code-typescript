import { checkIfPangram } from "./p1832-check-if-the-sentence-is-pangram";

it("case-01", () => {
    const sentence = "thequickbrownfoxjumpsoverthelazydog"
    const result = checkIfPangram(sentence)
    expect(result).toBe(true)
})

it("case-02", () => {
    const sentence = "leetcode"
    const result = checkIfPangram(sentence)
    expect(result).toBe(false)
})

it("case-03", () => {
    const sentence = "onrcsnlxckptsxffbyswujpamfltvmdoxovggepknmtacrjkkorjgvgtgaiaudspnpxkwikevmjeephhiyvnoymjwjfopovscbefecnoytjxfwasabwohqujwowmakpyuuqvgfab"
    const result = checkIfPangram(sentence)
    expect(result).toBe(false)
})