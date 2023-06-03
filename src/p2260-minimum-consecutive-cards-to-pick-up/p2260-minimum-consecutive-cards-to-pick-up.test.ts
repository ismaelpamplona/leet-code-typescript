import { minimumCardPickup } from "./p2260-minimum-consecutive-cards-to-pick-up"

it("case-01", () => {
    const cards = [3, 4, 2, 3, 4, 7]
    const result = minimumCardPickup(cards)
    expect(result).toBe(4)
})

it("case-02", () => {
    const cards = [1, 0, 5, 3]
    const result = minimumCardPickup(cards)
    expect(result).toBe(-1)
})


it("case-03", () => {
    const cards = [
        95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55, 76, 60, 43, 36, 85,
        47, 96, 6,
    ]
    const result = minimumCardPickup(cards)
    expect(result).toBe(3)
})

it("case-04", () => {
    const cards = [
        77, 10, 11, 51, 69, 83, 33, 94, 0, 42, 86, 41, 65, 40, 72, 8, 53, 31, 43, 22, 9, 94,
        45, 80, 40, 0, 84, 34, 76, 28, 7, 79, 80, 93, 20, 82, 36, 74, 82, 89, 74, 77, 27, 54,
        44, 93, 98, 44, 39, 74, 36, 9, 22, 57, 70, 98, 19, 68, 33, 68, 49, 86, 20, 50, 43,
    ]
    const result = minimumCardPickup(cards)
    expect(result).toBe(3)
})

it("case-05", () => {
    const cards = [1, 2, 3, 1, 4, 1, 1]
    const result = minimumCardPickup(cards)
    expect(result).toBe(2)
})