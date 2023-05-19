import { findMaxAverage, findMaxAverage2 } from "./maximum-average_subarray-i"

describe("case-01", () => {
    it("", () => {
        let vec = [1, 12, -5, -6, 50, 3]
        const result = findMaxAverage(vec, 4)
        const result2 = findMaxAverage2(vec, 4)
        expect(result).toBe(12.75)
        expect(result2).toBe(12.75)
    })
})

describe("case-02", () => {
    it("", () => {
        let vec = [5]
        const result = findMaxAverage(vec, 1)
        const result2 = findMaxAverage2(vec, 1)
        // expect(result).toBe(5.0)
        // expect(result2).toBe(5.0)
    })
})