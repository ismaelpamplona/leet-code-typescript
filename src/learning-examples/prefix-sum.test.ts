import { prefixSum, prefixSum2, answerQueries, answerQueries2 } from "./prefix-sum"

describe("case-01", () => {
    it("", () => {
        let nums = [5, 2, 1, 6, 3, 8]
        let expected = [5, 7, 8, 14, 17, 25]
        let result = prefixSum(nums)
        let result2 = prefixSum2(nums)
        expect(result).toEqual(expected)
        expect(result2).toEqual(expected)
    })
})

describe("case-02", () => {
    it("", () => {
        let nums = [1, 6, 3, 2, 7, 2]
        let queries: [number, number][] = [[0, 3], [2, 5], [2, 4]]
        let expected = [true, false, true]
        let result = answerQueries(nums, queries, 13)
        let result2 = answerQueries2(nums, queries, 13)
        expect(result).toEqual(expected)
        expect(result2).toEqual(expected)
    })
})