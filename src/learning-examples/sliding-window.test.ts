import {
    findLengthSumsK,
    findLongestSlidingWindow,
    findLength_1Seq,
    findLargestSumAndLengthK,
    findLargestSumAndLengthK_2,
} from "./sliding-window";

describe("case-01", () => {
    it("", () => {
        const arr = [3, 1, 2];
        const k = 8;
        const result = findLengthSumsK(arr, k);
        expect(result).toBe(3);
    });
});

describe("case-02", () => {
    it("", () => {
        const arr = [3, 1, 2, 7];
        const k = 8;
        const result = findLengthSumsK(arr, k);
        expect(result).toBe(3);
    });
});

describe("case-03", () => {
    it("", () => {
        const arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];
        const k = 8;
        const result = findLengthSumsK(arr, k);
        expect(result).toBe(4);
    });
});

describe("case-04", () => {
    it("", () => {
        const arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];
        const expected = [4, 2, 1, 1];
        const k = 8;
        const result = findLongestSlidingWindow(arr, k);
        expect(result).toEqual(expected);
    });
});

describe("case-05", () => {
    it("", () => {
        const s = "1101100111";
        const result = findLength_1Seq(s);
        expect(result).toBe(5);
    });
});

describe("case-06", () => {
    it("", () => {
        const arr = [3, -1, 4, 12, -8, 5, 6];
        const result = findLargestSumAndLengthK(arr, 4);
        expect(result).toBe(18);
    });
});

describe("case-07", () => {
    it("", () => {
        const arr = [3, -1, 4, 12, -8, 5, 6];
        const result = findLargestSumAndLengthK_2(arr, 4);
        expect(result).toBe(18);
    });
});
