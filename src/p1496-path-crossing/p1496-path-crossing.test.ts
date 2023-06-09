import { isPathCrossing } from "./p1496-path-crossing"

it("case-01", () => {
    const path = "NES"
    const result1 = isPathCrossing(path)
    expect(result1).toBe(false)
})

it("case-02", () => {
    const path = "NESWW"
    const result1 = isPathCrossing(path)
    expect(result1).toBe(true)
})

it("case-03", () => {
    const path = "SS"
    const result1 = isPathCrossing(path)
    expect(result1).toBe(false)
})  