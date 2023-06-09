import { lengthOfLongestSubstring } from "./p3-longest-substring-without-repeating-characters"

it("case-01", () => {
    const s = "abcabcbb"
    const result1 = lengthOfLongestSubstring(s)
    expect(result1).toBe(3)
})

it("case-02", () => {
    const s = "bbbbb"
    const result1 = lengthOfLongestSubstring(s)
    expect(result1).toBe(1)
})

it("case-03", () => {
    const s = "pwwkew"
    const result1 = lengthOfLongestSubstring(s)
    expect(result1).toBe(3)
})