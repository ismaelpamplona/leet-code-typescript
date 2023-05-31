import { numberOfSubarraysSw, numberOfSubarraysCount } from "./p1248-count-number-of-nice-subarrays";

it("case-01", () => {
    const nums = [1, 1, 2, 1, 1]
    const result1 = numberOfSubarraysSw(nums, 3)
    const result2 = numberOfSubarraysCount(nums, 3)
    expect(result1).toBe(2)
    expect(result2).toBe(2)
})

it("case-02", () => {
    const nums = [2, 4, 6]
    const result1 = numberOfSubarraysSw(nums, 1)
    const result2 = numberOfSubarraysCount(nums, 1)
    expect(result1).toBe(0)
    expect(result2).toBe(0)
})

it("case-03", () => {
    const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2]
    const result1 = numberOfSubarraysSw(nums, 2)
    const result2 = numberOfSubarraysCount(nums, 2)
    expect(result1).toBe(16)
    expect(result2).toBe(16)
})