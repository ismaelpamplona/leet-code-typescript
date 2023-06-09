import { sumOfUnique } from "./p1748-sum-of-unique-elements"

it("case-01", () => {
    const nums = [1, 2, 3, 2]
    const result1 = sumOfUnique(nums)
    expect(result1).toBe(4)
})

it("case-02", () => {
    const nums = [1, 1, 1, 1, 1]
    const result1 = sumOfUnique(nums)
    expect(result1).toBe(0)
})

it("case-03", () => {
    const nums = [1, 2, 3, 4, 5]
    const result1 = sumOfUnique(nums)
    expect(result1).toBe(15)
})

it("case-04", () => {
    const nums = [1, 2, 3, 4, 5, 1]
    const result1 = sumOfUnique(nums)
    expect(result1).toBe(14)
})