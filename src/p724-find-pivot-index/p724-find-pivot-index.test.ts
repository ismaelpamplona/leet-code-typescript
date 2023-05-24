import { pivotIndex } from "./p724-find-pivot-index"

describe("case-01", () => {
    it("", () => {
        let nums = [1, 7, 3, 6, 5, 6]
        let result = pivotIndex(nums)
        expect(result).toBe(3)
    })
})

describe("case-02", () => {
    it("", () => {
        let nums = [1, 2, 3]
        let result = pivotIndex(nums)
        expect(result).toBe(-1)
    })
})

describe("case-03", () => {
    it("", () => {
        let nums = [2, 1, -1]
        let result = pivotIndex(nums)
        expect(result).toBe(0)
    })
})