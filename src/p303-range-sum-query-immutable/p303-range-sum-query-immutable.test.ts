/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

import { NumArray } from "./p303-range-sum-query-immutable"


const nums = [-2, 0, 3, -5, 2, -1]
const obj = new NumArray(nums)

describe("case-01", () => {
    it("", () => {
        let result1 = obj.sumRange(0, 2)
        expect(result1).toBe(1)
    })
})

describe("case-02", () => {
    it("", () => {
        let result2 = obj.sumRange(2, 5)
        expect(result2).toBe(-1)
    })
})

describe("case-03", () => {
    it("", () => {
        let result3 = obj.sumRange(0, 5)
        expect(result3).toBe(-3)
    })
})