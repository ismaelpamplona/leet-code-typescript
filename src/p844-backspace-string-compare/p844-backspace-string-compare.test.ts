import { backspaceCompare } from "./p844-backspace-string-compare"

it("case_01", () => {
    const s = "ab#c"
    const t = "ad#c"
    const result = backspaceCompare(s, t)
    expect(result).toBe(true)
})

it("case_02", () => {
    const s = "ab##"
    const t = "c#d#"
    const result = backspaceCompare(s, t)
    expect(result).toBe(true)
})

it("case_03", () => {
    const s = "a#c"
    const t = "b"
    const result = backspaceCompare(s, t)
    expect(result).toBe(false)
})

it("case_04", () => {
    const s = "y#fo##f"
    const t = "y#f#o##f"
    const result = backspaceCompare(s, t)
    expect(result).toBe(true)
})
