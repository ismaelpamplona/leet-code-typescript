import { subarraysDivByK } from "./p974-subarray-sums-divisible-by-k"

it("case-01", () => {
    const nums = [4, 5, 0, -2, -3, 1]
    const result1 = subarraysDivByK(nums, 5)
    expect(result1).toBe(7)
})

it("case-02", () => {
    const nums = [5]
    const result1 = subarraysDivByK(nums, 9)
    expect(result1).toBe(0)
})