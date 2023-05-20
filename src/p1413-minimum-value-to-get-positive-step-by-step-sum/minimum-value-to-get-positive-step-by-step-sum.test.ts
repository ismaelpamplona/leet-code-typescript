import { minStartValue } from "./minimum-value-to-get-positive-step-by-step-sum"

describe("case-01", () => {
    it("", () => {
        let nums = [-3, 2, -3, 4, 2]
        const result = minStartValue(nums)
        expect(result).toBe(5)
    })
})

describe("case-02", () => {
    it("", () => {
        let nums = [1, 2]
        const result = minStartValue(nums)
        expect(result).toBe(1)
    })
})

describe("case-03", () => {
    it("", () => {
        let nums = [1, -2, -3]
        const result = minStartValue(nums)
        expect(result).toBe(5)
    })
})

describe("case-04", () => {
    it("", () => {
        let nums = [2, 3, 5, -5, -1]
        const result = minStartValue(nums)
        expect(result).toBe(1)
    })
})