import { customSortString } from "./p791-custom-sort-string"

it("case-01", () => {
    const order = "cba"
    const s = "abcd"
    const result = customSortString(order, s)
    expect(result).toEqual("cbad")
})

it("case-02", () => {
    const order = "cbafg"
    const s = "abcd"
    const result = customSortString(order, s)
    expect(result).toEqual("cbad")
})

it("case-03", () => {
    const order = "kqep"
    const s = "pekeq"
    const result = customSortString(order, s)
    expect(result).toEqual("kqeep")
})