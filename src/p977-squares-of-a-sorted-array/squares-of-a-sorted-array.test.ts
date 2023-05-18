import { sortedSquares } from "./squares-of-a-sorted-array";

describe("case-01", () => {
    it("", () => {
        let input = [-4, -1, 0, 3, 10];
        let output = [0, 1, 9, 16, 100];
        let result = sortedSquares(input);
        expect(result).toEqual(output);
    });
});

describe("case-02", () => {
    it("", () => {
        let input = [-7, -3, 2, 3, 11];
        let output = [4, 9, 9, 49, 121];
        let result = sortedSquares(input);
        expect(result).toEqual(output);
    });
});

describe("case-03", () => {
    it("", () => {
        let input = [-5, -3, -2, -1];
        let output = [1, 4, 9, 25];
        let result = sortedSquares(input);
        expect(result).toEqual(output);
    });
});
