import { containsDuplicate } from "./p217-contains-duplicate"

it("case-01", () => {
    const nums = [1, 2, 3, 1]
    const result1 = containsDuplicate(nums)
    expect(result1).toBe(true)
})

it("case-02", () => {
    const nums = [1, 2, 3, 4]
    const result1 = containsDuplicate(nums)
    expect(result1).toBe(false)
})

it("case-03", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    const result1 = containsDuplicate(nums)
    expect(result1).toBe(true)
})