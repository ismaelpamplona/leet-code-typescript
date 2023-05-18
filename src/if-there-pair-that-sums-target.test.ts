import { ifTherePairThatSumsTarget } from "./if-there-pair-that-sums-target";

describe("case-01", () => {
    it("", () => {
        const arr = [1, 2, 4, 6, 8, 9, 14, 15];
        const target = 13;
        const result = ifTherePairThatSumsTarget(arr, target);
        expect(result).toBe(true);
    });
});

describe("case-02", () => {
    it("", () => {
        const arr = [1, 2, 4];
        const target = 13;
        const result = ifTherePairThatSumsTarget(arr, target);
        expect(result).toBe(false);
    });
});

describe("case-03", () => {
    it("", () => {
        const arr = [1, 2, 4];
        const target = 6;
        const result = ifTherePairThatSumsTarget(arr, target);
        expect(result).toBe(true);
    });
});
