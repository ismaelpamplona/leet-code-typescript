import { getAveragesPrefix, getAveragesSliding } from "./p2090-k-radius-subarray-averages"

it("case-01", () => {
    const nums = [7, 4, 3, 9, 1, 8, 5, 2, 6]
    const output = [-1, -1, -1, 5, 4, 4, -1, -1, -1]
    const result1 = getAveragesPrefix(nums, 3)
    const result2 = getAveragesSliding(nums, 3)
    expect(result1).toStrictEqual(output)
    expect(result2).toStrictEqual(output)
})

it("case-02", () => {
    const nums = [100000]
    const output = [100000]
    const result1 = getAveragesPrefix(nums, 0)
    const result2 = getAveragesSliding(nums, 0)
    expect(result1).toStrictEqual(output)
    expect(result2).toStrictEqual(output)
})


it("case-03", () => {
    const nums = [8]
    const output = [-1]
    const result1 = getAveragesPrefix(nums, 100000)
    const result2 = getAveragesSliding(nums, 100000)
    expect(result1).toStrictEqual(output)
    expect(result2).toStrictEqual(output)
})