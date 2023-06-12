import { maximumUniqueSubarray } from "./p1695-maximum-erasure-value"

it("case-01", () => {
    const nums = [4, 2, 4, 5, 6]
    const result = maximumUniqueSubarray(nums)
    expect(result).toBe(17)
})

it("case-02", () => {
    const nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
    const result = maximumUniqueSubarray(nums)
    expect(result).toBe(8)
})