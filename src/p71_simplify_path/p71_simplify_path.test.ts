import { simplifyPath } from "./p71_simplify_path"

it("case-01", () => {
    const path = "/home/"
    const output = "/home"
    const result = simplifyPath(path)
    expect(output).toEqual(result)
})

it("case-02", () => {
    const path = "/../"
    const output = "/"
    const result = simplifyPath(path)
    expect(output).toEqual(result)
})

it("case-03", () => {
    const path = "/home//foo/"
    const output = "/home/foo"
    const result = simplifyPath(path)
    expect(output).toEqual(result)
})

it("case-04", () => {
    const path = "/a/b///c/.././d/../f/"
    const output = "/a/b/f"
    const result = simplifyPath(path)
    expect(output).toEqual(result)
})