import { numSubarrayProductLessK } from "./subarray-product-less-than-k"

describe("case-01", () => {
    it("", () => {
        let nums = [10, 5, 2, 6]
        let result = numSubarrayProductLessK(nums, 100)
        expect(result).toBe(8)
    })
})

describe("case-02", () => {
    it("", () => {
        let nums = [1, 2, 3]
        let result = numSubarrayProductLessK(nums, 0)
        expect(result).toBe(0)
    })
})

describe("case-03", () => {
    it("", () => {
        let nums = [1, 1, 1]
        let result = numSubarrayProductLessK(nums, 1)
        expect(result).toBe(0)
    })
})

describe("case-04", () => {
    it("", () => {
        let nums = [0, 0, 0]
        let result = numSubarrayProductLessK(nums, 2)
        expect(result).toBe(6)
    })
})
