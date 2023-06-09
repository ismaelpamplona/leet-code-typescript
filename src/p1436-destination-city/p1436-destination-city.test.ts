import { destCity } from "./p1436-destination-city"

it("case-01", () => {
    const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
    const result1 = destCity(paths)
    expect(result1).toEqual("Sao Paulo")
})

it("case-02", () => {
    const paths = [["B", "C"], ["D", "B"], ["C", "A"]]
    const result1 = destCity(paths)
    expect(result1).toEqual("A")
})

it("case-03", () => {
    const paths = [["A", "Z"]]
    const result1 = destCity(paths)
    expect(result1).toEqual("Z")
})