import { removeDuplicates } from "./p1047-remove-all-adjacent-duplicates-in-string"

it("case-01", () => {
    const s = "abbaca"
    const output = "ca"
    const result = removeDuplicates(s)
    expect(result).toStrictEqual(output)
})

it("case-02", () => {
    const s = "azxxzy"
    const output = "ay"
    const result = removeDuplicates(s)
    expect(result).toStrictEqual(output)
})
