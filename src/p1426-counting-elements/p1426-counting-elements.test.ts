import { countElements } from "./p1426-counting-elements"

it("case-1", () => {
    const arr = [1, 2, 3]
    const result = countElements(arr)
    expect(result).toBe(2)
})

it("case-2", () => {
    const arr = [1, 1, 3, 3, 5, 5, 7, 7]
    const result = countElements(arr)
    expect(result).toBe(0)
})

it("case-3", () => {
    const arr = [1, 1, 2]
    const result = countElements(arr)
    expect(result).toBe(2)
})

it("case-4", () => {
    const arr = [1, 1, 2, 2]
    const result = countElements(arr)
    expect(result).toBe(2)
})

it("case-5", () => {
    const arr = [1, 3, 2, 3, 5, 0]
    const result = countElements(arr)
    expect(result).toBe(3)
})