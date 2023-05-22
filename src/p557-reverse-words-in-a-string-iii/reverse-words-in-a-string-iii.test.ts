import { reverseWords } from "./reverse-words-in-a-string-iii"

describe("case-01", () => {
    it("", () => {
        const s = "Let's take LeetCode contest"
        const expected = "s'teL ekat edoCteeL tsetnoc"
        const result = reverseWords(s)
        expect(result).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        const s = "God Ding"
        const expected = "doG gniD"
        const result = reverseWords(s)
        expect(result).toEqual(expected)
    })
})

