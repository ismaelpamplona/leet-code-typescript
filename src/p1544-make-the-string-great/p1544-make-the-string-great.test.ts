import { makeGood } from "./p1544-make-the-string-great"

it("case_01", () => {
    const s = "leEeetcode"
    const output = "leetcode"
    const result = makeGood(s)
    expect(result).toEqual(output)

})

it("case_02", () => {
    const s = "abBAcC"
    const output = ""
    const result = makeGood(s)
    expect(result).toEqual(output)

})

it("case_03", () => {
    const s = "s"
    const output = "s"
    const result = makeGood(s)
    expect(result).toEqual(output)

})