import { isSubsequence } from "./is-subsequence";

describe("case-01", () => {
    it("", () => {
        let s = "abc";
        let t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
});

describe("case-02", () => {
    it("", () => {
        let s = "axc";
        let t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
});

describe("case-03", () => {
    it("", () => {
        let s = "";
        let t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
});

describe("case-04", () => {
    it("", () => {
        let s = "acb";
        let t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
});
