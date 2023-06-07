import { numJewelsInStones } from "./p771-jewels-and-stones"

it("case-01", () => {
    const jewels = "aA"
    const stones = "aAAbbbb"
    const result1 = numJewelsInStones(jewels, stones)
    expect(result1).toBe(3)
})

it("case-02", () => {
    const jewels = "z"
    const stones = "ZZ"
    const result1 = numJewelsInStones(jewels, stones)
    expect(result1).toBe(0)
})