import { numSubarraysWithSum } from "./p930-binary-subarrays-with-sum"

it("case-01", () => {
    const nums = [1, 0, 1, 0, 1]
    const result = numSubarraysWithSum(nums, 2)
    expect(result).toBe(4)
})

it("case-02", () => {
    const nums = [0, 0, 0, 0, 0]
    const result = numSubarraysWithSum(nums, 0)
    expect(result).toBe(15)
})