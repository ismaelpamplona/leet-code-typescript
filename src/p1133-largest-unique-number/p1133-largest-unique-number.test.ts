import { largestUniqueNumber } from "./p1133-largest-unique-number"

it("case_01", () => {
    let nums = [5, 7, 3, 9, 4, 9, 8, 3, 1]
    let result = largestUniqueNumber(nums)
    expect(result).toBe(8)
})


it("case_02", () => {
    let nums = [9, 9, 8, 8]
    let result = largestUniqueNumber(nums)
    expect(result).toBe(-1)
})