import { numIdenticalPairs } from "./p1512-number-of-good-pairs"

it("case-01", () => {
    const nums = [1, 2, 3, 1, 1, 3]
    const result = numIdenticalPairs(nums)
    expect(result).toBe(4)
})

it("case-02", () => {
    const nums = [1, 1, 1, 1]
    const result = numIdenticalPairs(nums)
    expect(result).toBe(6)
})

it("case-03", () => {
    const nums = [1, 2, 3]
    const result = numIdenticalPairs(nums)
    expect(result).toBe(0)
})

it("case-04", () => {
    const nums = [
        6, 5, 1, 5, 7, 7, 9, 1, 5, 7, 1, 6, 10, 9, 7, 4, 1, 8, 7, 1, 1, 8, 6, 4, 7, 4, 10, 5,
        3, 9, 10, 1, 9, 5, 5, 4, 1, 7, 4, 2, 9, 2, 6, 6, 4, 2, 10, 3, 5, 3, 6, 4, 7, 4, 6, 4,
        4, 6, 3, 4, 10, 1, 10, 6, 10, 4, 9, 6, 6, 4, 8, 6, 9, 5, 4,
    ]
    const result = numIdenticalPairs(nums)
    expect(result).toBe(303)
})