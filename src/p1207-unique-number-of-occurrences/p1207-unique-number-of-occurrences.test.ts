import { uniqueOccurrences } from "./p1207-unique-number-of-occurrences"

it("case-01", () => {
    const arr = [1, 2, 2, 1, 1, 3]
    const result = uniqueOccurrences(arr)
    expect(result).toBe(true)
})

it("case-02", () => {
    const arr = [1, 2]
    const result = uniqueOccurrences(arr)
    expect(result).toBe(false)
})

it("case-03", () => {
    const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
    const result = uniqueOccurrences(arr)
    expect(result).toBe(true)
})