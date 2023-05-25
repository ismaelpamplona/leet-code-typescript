import { repeatedCharacter } from "./p2351-first-letter-to-appear-twice"

it("case-01", () => {
    let s = "abccbaacz"
    let result = repeatedCharacter(s)
    expect(result).toBe("c")
})


it("case-02", () => {
    let s = "abcdd"
    let result = repeatedCharacter(s)
    expect(result).toBe("d")
})