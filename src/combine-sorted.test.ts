import { combineSorted } from "./combine-sorted";

describe("case-01", () => {
    it("", () => {
        const arr_1 = [1, 4, 7, 20];
        const arr_2 = [3, 5, 6];
        const expected = [1, 3, 4, 5, 6, 7, 20];
        const result = combineSorted(arr_1, arr_2);
        expect(result).toEqual(expected);
    });
});

describe("case-02", () => {
    it("", () => {
        const arr_1 = [0, 2, 4, 6, 8, 9, 10, 11];
        const arr_2 = [1, 3, 5, 7];
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const result = combineSorted(arr_1, arr_2);
        expect(result).toEqual(expected);
    });
});
