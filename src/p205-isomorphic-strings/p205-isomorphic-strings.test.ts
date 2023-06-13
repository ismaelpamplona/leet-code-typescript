import { isIsomorphic } from "./p205-isomorphic-strings"

it("case-01", () => {
    const s = "egg"
    const t = "add"
    const result = isIsomorphic(s, t)
    expect(result).toBe(true)
})

it("case-02", () => {
    const s = "foo"
    const t = "bar"
    const result = isIsomorphic(s, t)
    expect(result).toBe(false)
})

it("case-03", () => {
    const s = "paper"
    const t = "title"
    const result = isIsomorphic(s, t)
    expect(result).toBe(true)
})

it("case-04", () => {
    const s = "badc"
    const t = "baba"
    const result = isIsomorphic(s, t)
    expect(result).toBe(false)
})

it("case-05", () => {
    const s = "aa"
    const t = "ab"
    const result = isIsomorphic(s, t)
    expect(result).toBe(false)
})

it("case-06", () => {
    const s = "bbbaaaba"
    const t = "aaabbbba"
    const result = isIsomorphic(s, t)
    expect(result).toBe(false)
})