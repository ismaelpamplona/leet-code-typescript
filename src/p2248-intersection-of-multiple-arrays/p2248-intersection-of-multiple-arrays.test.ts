import { intersection } from "./p2248-intersection-of-multiple-arrays"

it("case-01", () => {
    let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]
    let result = intersection(nums)
    let expected = [3, 4]
    expect(result).toEqual(expected)


})

it("case-02", () => {
    let nums = [[1, 2, 3], [4, 5, 6]]
    let result = intersection(nums)
    let expected = []
    expect(result).toEqual(expected)
})

it("case-03", () => {
    let nums = [[4, 43, 15, 30, 27, 22], [15, 30, 43, 27, 10, 4]]
    let result = intersection(nums)
    let expected = [4, 15, 27, 30, 43]
    expect(result).toEqual(expected)
})