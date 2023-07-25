import { canConstructHash } from "./ransom-note"

it("case-01", () => {
    const ransomNote = "a"
    const magazine = "b"
    const result2 = canConstructHash(ransomNote, magazine)
    expect(result2).toBe(false)
})

it("case-02", () => {
    const ransomNote = "aa"
    const magazine = "ab"
    const result2 = canConstructHash(ransomNote, magazine)
    expect(result2).toBe(false)
})

it("case-03", () => {
    const ransomNote = "aa"
    const magazine = "aab"
    const result2 = canConstructHash(ransomNote, magazine)
    expect(result2).toBe(true)

})

it("case-04", () => {
    const ransomNote = "bg"
    const magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
    const result2 = canConstructHash(ransomNote, magazine)
    expect(result2).toBe(true)
})

