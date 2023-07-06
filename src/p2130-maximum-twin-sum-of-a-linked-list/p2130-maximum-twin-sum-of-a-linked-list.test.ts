import * as _ from "./p2130-maximum-twin-sum-of-a-linked-list"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = _.fromVecToListIt(head)
    const linked2 = _.fromVecToListRec(head)
    const vec1 = _.fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    let head = _.fromVecToListIt([5, 4, 2, 1])
    let result = _.pairSum(head)
    expect(result).toBe(6)
})

it("case-02", () => {
    let head = _.fromVecToListIt([4, 2, 2, 3])
    let result = _.pairSum(head)
    expect(result).toBe(7)
})

it("case-03", () => {
    let head = _.fromVecToListIt([1, 100000])
    let result = _.pairSum(head)
    expect(result).toBe(100001)
})