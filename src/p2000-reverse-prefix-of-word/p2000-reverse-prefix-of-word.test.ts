import { reversePrefix } from "./p2000-reverse-prefix-of-word"

describe("case-01", () => {
    it("", () => {
        let s = "abcdefd"
        let expected = "dcbaefd"
        const result = reversePrefix(s, 'd')
        expect(result).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        let s = "xyxzxe"
        let expected = "zxyxxe"
        const result = reversePrefix(s, 'z')
        expect(result).toEqual(expected)
    })
})

describe("case-03", () => {
    it("", () => {
        let s = "abcd"
        let expected = "abcd"
        const result = reversePrefix(s, 'z')
        expect(result).toEqual(expected)
    })
})

