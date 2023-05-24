import { maxVowels } from "./p1456-maximum-number-of-vowels-in-a-substring-of-given-length"


describe("case-01", () => {
    it("", () => {
        let s = "abciiidef"
        const result = maxVowels(s, 3)
        expect(result).toBe(3)
    })
})


describe("case-02", () => {
    it("", () => {
        let s = "aeiou"
        const result = maxVowels(s, 2)
        expect(result).toBe(2)
    })
})

describe("case-03", () => {
    it("", () => {
        let s = "leetcode"
        const result = maxVowels(s, 3)
        expect(result).toBe(2)
    })
})

describe("case-04", () => {
    it("", () => {
        let s = "ramadan"
        const result = maxVowels(s, 2)
        expect(result).toBe(1)
    })
})

describe("case-05", () => {
    it("", () => {
        let s = "zpuerktejfp"
        const result = maxVowels(s, 3)
        expect(result).toBe(2)
    })
})