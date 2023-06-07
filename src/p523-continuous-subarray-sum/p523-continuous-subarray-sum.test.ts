import { checkSubarraySum } from "./p523-continuous-subarray-sum"

it("case-01", () => {
    const nums = [23, 2, 4, 6, 7]
    const result1 = checkSubarraySum(nums, 6)
    expect(result1).toBe(true)
})

it("case-02", () => {
    const nums = [23, 2, 6, 4, 7]
    const result1 = checkSubarraySum(nums, 6)
    expect(result1).toBe(true)
})

it("case-03", () => {
    const nums = [23, 2, 6, 4, 7]
    const result1 = checkSubarraySum(nums, 13)
    expect(result1).toBe(false)
})

it("case-04", () => {
    const nums = [2, 4, 3]
    const result1 = checkSubarraySum(nums, 6)
    expect(result1).toBe(true)
})

it("case-05", () => {
    const nums = [1, 3, 6, 0, 9, 6, 9]
    const result1 = checkSubarraySum(nums, 7)
    expect(result1).toBe(true)
})
