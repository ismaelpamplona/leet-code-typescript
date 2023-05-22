import { longestOnes } from "./p917-reverse-only-letters"

describe("case-01", () => {
    it("", () => {
        let s = "ab-cd"
        let expected = "dc-ba"
        let result = longestOnes(s)
        expect(result).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        let s = "a-bC-dEf-ghIj"
        let expected = "j-Ih-gfE-dCba"
        let result = longestOnes(s)
        expect(result).toEqual(expected)
    })
})

describe("case-03", () => {
    it("", () => {
        let s = "Test1ng-Leet=code-Q!"
        let expected = "Qedo1ct-eeLg=ntse-T!"
        let result = longestOnes(s)
        expect(result).toEqual(expected)
    })
})

