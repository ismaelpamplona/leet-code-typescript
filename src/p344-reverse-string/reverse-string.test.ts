import { reverseString } from "./reverse-string"

describe("case-01", () => {
    it("", () => {
        let input = ["h", "e", "l", "l", "o"]
        let output = ["o", "l", "l", "e", "h"]
        let result = reverseString(input)

        expect(result).toEqual(output)
    })
})
