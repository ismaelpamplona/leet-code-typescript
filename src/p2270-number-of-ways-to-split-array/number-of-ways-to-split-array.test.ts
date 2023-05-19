import { waysToSplitArray, waysToSplitArray2 } from "./number-of-ways-to-split-array"

describe("case-01", () => {
    it("", () => {
        let vec = [10, 4, -8, 7]
        const result = waysToSplitArray(vec)
        const result2 = waysToSplitArray2(vec)
        expect(result).toBe(2)
        expect(result2).toBe(2)
    })
})

describe("case-02", () => {
    it("", () => {
        let vec = [2, 3, 1, 0]
        const result = waysToSplitArray(vec)
        const result2 = waysToSplitArray2(vec)
        expect(result).toBe(2)
        expect(result2).toBe(2)
    })
})

