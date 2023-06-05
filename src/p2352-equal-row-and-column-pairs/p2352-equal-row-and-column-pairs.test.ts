import { equalPairs } from "./p2352-equal-row-and-column-pairs"

it("case-01", () => {
    const grid = [
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ]
    const result = equalPairs(grid)
    expect(result).toBe(1)
})

it("case-02", () => {
    const grid = [
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2]
    ]
    const result = equalPairs(grid)
    expect(result).toBe(3)
})

it("case-03", () => {
    let grid = [
        [3, 1, 2, 2],
        [1, 4, 4, 4],
        [2, 4, 2, 2],
        [2, 5, 2, 2],
    ]
    let result = equalPairs(grid)
    expect(result).toBe(3)
})


it("case-04", () => {
    let grid = [
        [11, 1],
        [1, 11]
    ]
    let result = equalPairs(grid)
    expect(result).toBe(2)
})