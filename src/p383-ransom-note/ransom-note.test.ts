import { canConstruct } from "./ransom-note"

describe("case-01", () => {
    it("should return 'false' when invoking the function", () => {
        const result = canConstruct("a", "b")
        expect(result).toBe(false)
    })
})

describe("case-02", () => {
    it("should return 'false' when invoking the function", () => {
        const result = canConstruct("aa", "ab")
        expect(result).toBe(false)
    })
})

describe("case-03", () => {
    it("should return 'true' when invoking the function", () => {
        const result = canConstruct("aa", "aab")
        expect(result).toBe(true)
    })
})

describe("case-04", () => {
    it("should return 'true' when invoking the function", () => {
        const result = canConstruct(
            "bg",
            "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
        )
        expect(result).toBe(true)
    })
})
