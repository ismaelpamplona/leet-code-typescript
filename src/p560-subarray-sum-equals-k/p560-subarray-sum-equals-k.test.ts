import { subarraySum } from "./p560-subarray-sum-equals-k"

it("case-01", () => {
    const nums = [1, 1, 1]
    const result = subarraySum(nums, 2)
    expect(result).toBe(2)
})


it("case-02", () => {
    const nums = [1, 2, 3]
    const result = subarraySum(nums, 3)
    expect(result).toBe(2)
})


it("case-03", () => {
    const nums = [1]
    const result = subarraySum(nums, 3)
    expect(result).toBe(0)
})


it("case-04", () => {
    const nums = [-1, -1, 1]
    const result = subarraySum(nums, 3)
    expect(result).toBe(0)
})


it("case-05", () => {
    const nums = [-2, 1, 2, -2, 5, -2, 1]
    const result = subarraySum(nums, 3)
    expect(result).toBe(5)
})


it("case-06", () => {
    const nums = [1]
    const result = subarraySum(nums, 0)
    expect(result).toBe(0)
})
