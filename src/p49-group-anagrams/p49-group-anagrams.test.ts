import { groupAnagrams } from "./p49-group-anagrams"

it("case-01", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    const result = groupAnagrams(strs)
    const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

    expect(result).toEqual(expected)
})

it("case-02", () => {
    const strs = [""]
    const result = groupAnagrams(strs)
    const expected = [[""]]
    expect(result).toEqual(expected)
})

it("case-03", () => {
    const strs = ["a"]
    const result = groupAnagrams(strs)
    const expected = [["a"]]
    expect(result).toEqual(expected)
})
