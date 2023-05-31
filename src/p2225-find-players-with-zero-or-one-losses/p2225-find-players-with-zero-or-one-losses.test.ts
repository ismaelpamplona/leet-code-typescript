import { findWinners } from "./p2225-find-players-with-zero-or-one-losses"

it("case-01", () => {
    let matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
    let result = findWinners(matches)
    let expected = [[1, 2, 10], [4, 5, 7, 8]]
    expect(result).toEqual(expected)
})

it("case-02", () => {
    let matches = [[2, 3], [1, 3], [5, 4], [6, 4]]
    let result = findWinners(matches)
    let expected = [[1, 2, 5, 6], []]
    expect(result).toEqual(expected)
})