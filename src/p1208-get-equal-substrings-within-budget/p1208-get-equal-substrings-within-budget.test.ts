import { equalSubstring } from "./p1208-get-equal-substrings-within-budget"

describe("case-01", () => {
    it("", () => {
        let s = "abcd"
        let t = "bcdf"
        let maxCost = 3
        const result = equalSubstring(s, t, maxCost)
        expect(result).toBe(3)
    })
})

describe("case-02", () => {
    it("", () => {
        let s = "abcd"
        let t = "cdef"
        let maxCost = 3
        const result = equalSubstring(s, t, maxCost)
        expect(result).toBe(1)
    })
})

describe("case-03", () => {
    it("", () => {
        let s = "abcd"
        let t = "acde"
        let maxCost = 0
        const result = equalSubstring(s, t, maxCost)
        expect(result).toBe(1)
    })
})
