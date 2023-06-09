import { findLucky } from "./p1394-find-lucky-integer-in-an-array"

it("case-01", () => {
    const arr = [2, 2, 3, 4]
    const result = findLucky(arr)
    expect(result).toBe(2)
})

it("case-02", () => {
    const arr = [1, 2, 2, 3, 3, 3]
    const result = findLucky(arr)
    expect(result).toBe(3)
})

it("case-03", () => {
    const arr = [2, 2, 2, 3, 3]
    const result = findLucky(arr)
    expect(result).toBe(-1)
})