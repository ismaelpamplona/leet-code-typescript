import { isValid } from "./p20-valid-parentheses"

it("case-01", () => {
    let s = "()"
    let result = isValid(s)
    expect(result).toBe(true)
})

it("case-02", () => {
    let s = "()[]{}"
    let result = isValid(s)
    expect(result).toBe(true)
})

it("case-03", () => {
    let s = "(]"
    let result = isValid(s)
    expect(result).toBe(false)
})

it("case-04", () => {
    let s = "{[]}"
    let result = isValid(s)
    expect(result).toBe(true)
})

it("case-05", () => {
    let s = "([)]"
    let result = isValid(s)
    expect(result).toBe(false)
})