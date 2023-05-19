import { longestOnes } from "./p1004-max-consecutive-ones-iii"

describe("case-01", () => {
    it("", () => {
        let vec = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
        const result = longestOnes(vec, 2)
        expect(result).toBe(6)
    })
})

describe("case-02", () => {
    it("", () => {
        let vec = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
        const result = longestOnes(vec, 3)
        expect(result).toBe(10)
    })
})

