import { isPalindrome } from "./is-palindrome";

describe("case-01", () => {
    it("", () => {
        const result = isPalindrome("racecar");
        expect(result).toBe(true);
    });
});

describe("case-02", () => {
    it("", () => {
        const result = isPalindrome("ismael");
        expect(result).toBe(false);
    });
});
