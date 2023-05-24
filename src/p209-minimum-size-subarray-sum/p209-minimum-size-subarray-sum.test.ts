import { minSubArrayLen } from "./p209-minimum-size-subarray-sum"


describe("case-01", () => {
    it("", () => {
        const nums = [2, 3, 1, 2, 4, 3];
        const result = minSubArrayLen(7, nums)
        expect(result).toBe(2)
    })
})


describe("case-02", () => {
    it("", () => {
        const nums = [1, 4, 4];
        const result = minSubArrayLen(4, nums)
        expect(result).toBe(1)
    })
})

describe("case-03", () => {
    it("", () => {
        const nums = [1, 1, 1, 1, 1, 1, 1, 1];
        const result = minSubArrayLen(11, nums)
        expect(result).toBe(0)
    })
})