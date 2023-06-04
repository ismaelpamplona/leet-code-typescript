import { maximumSum } from "./p2342-max-sum-of-a-pair-with-equal-sum-of-digits"

it("case-01", () => {
    const nums = [18, 43, 36, 13, 7]
    const result = maximumSum(nums)
    expect(result).toBe(54)
})

it("case-02", () => {
    const nums = [10, 12, 19, 14]
    const result = maximumSum(nums)
    expect(result).toBe(-1)
})

it("case-03", () => {
    const nums = [18, 43, 36, 13, 7, 27]
    const result = maximumSum(nums)
    expect(result).toBe(63)
})

it("case-04", () => {
    const nums = [368, 369, 307, 304, 384, 138, 90, 279, 35, 396, 114, 328, 251, 364, 300, 191, 438, 467, 183]
    const result = maximumSum(nums)
    expect(result).toBe(835)
})

it("case-05", () => {
    const nums = [23, 14, 5, 32]
    const result = maximumSum(nums)
    expect(result).toBe(55)
})