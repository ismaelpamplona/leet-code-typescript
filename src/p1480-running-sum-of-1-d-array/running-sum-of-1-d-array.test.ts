import { runningSum } from "./running-sum-of-1-d-array"

describe("case-01", () => {
    it("", () => {
        const vec = [1, 2, 3, 4]
        const expected = [1, 3, 6, 10]
        const result = runningSum(vec)
        expect(result).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        const vec = [1, 1, 1, 1, 1]
        const expected = [1, 2, 3, 4, 5]
        const result = runningSum(vec)
        expect(result).toEqual(expected)
    })
})
