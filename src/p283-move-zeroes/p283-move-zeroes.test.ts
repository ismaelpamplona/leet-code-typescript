import { moveZeroes } from "./p283-move-zeroes"

describe("case-01", () => {
    it("", () => {
        const nums = [0, 1, 0, 3, 12]
        const expected = [1, 3, 12, 0, 0]
        moveZeroes(nums)
        expect(nums).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        const nums = [0]
        const expected = [0]
        moveZeroes(nums)
        expect(nums).toEqual(expected)
    })
})

