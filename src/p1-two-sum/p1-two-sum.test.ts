import { twoSum } from "./p1-two-sum"

describe("case-01", () => {
    it("", () => {
        let nums = [2, 7, 11, 15]
        let result = twoSum(nums, 9)
        expect(result).toEqual([0, 1])
    })
})

// describe("case-02", () => {
//     it("", () => {
//         let nums = [3, 2, 4]
//         let result = twoSum(nums, 6)
//         expect(result).toEqual([1, 2])
//     })
// })


// describe("case-03", () => {
//     it("", () => {
//         let nums = [3, 3]
//         let result = twoSum(nums, 6)
//         expect(result).toEqual([0, 1])
//     })
// })