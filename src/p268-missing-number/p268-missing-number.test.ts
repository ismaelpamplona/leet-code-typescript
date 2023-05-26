import { missingNumberHash, missingNumberXor, missingNumberSum } from "./p268-missing-number";

it("case-01", () => {
    const nums = [3, 0, 1]
    const result1 = missingNumberHash(nums)
    const result2 = missingNumberXor(nums)
    const result3 = missingNumberSum(nums)
    expect(result1).toBe(2)
    expect(result2).toBe(2)
    expect(result3).toBe(2)
})

it("case-02", () => {
    const nums = [0, 1]
    const result1 = missingNumberHash(nums)
    const result2 = missingNumberXor(nums)
    const result3 = missingNumberSum(nums)
    expect(result1).toBe(2)
    expect(result2).toBe(2)
    expect(result3).toBe(2)
})

it("case-03", () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
    const result1 = missingNumberHash(nums)
    const result2 = missingNumberXor(nums)
    const result3 = missingNumberSum(nums)
    expect(result1).toBe(8)
    expect(result2).toBe(8)
    expect(result3).toBe(8)
})