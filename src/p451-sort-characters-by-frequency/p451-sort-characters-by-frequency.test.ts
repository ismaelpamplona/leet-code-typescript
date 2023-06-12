import { frequencySort } from "./p451-sort-characters-by-frequency"

it("case-01", () => {
    const s = "tree"
    const result = frequencySort(s)
    expect(["eert", "eetr"]).toContain(result)
})

it("case-02", () => {
    const s = "cccaaa"
    const result = frequencySort(s)
    expect(["aaaccc", "cccaaa"]).toContain(result)
})

it("case-03", () => {
    const s = "Aabb"
    const result = frequencySort(s)
    expect(["bbaA", "bbAa"]).toContain(result)
})