import {
    fromVecToListIt,
    fromListToVec,
    fromVecToListRec,
    middleNodeFloyd,
    middleNodeIt
} from "./p876-middle-of-the-linked-list"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = fromVecToListIt(head)
    const linked2 = fromVecToListRec(head)
    const vec1 = fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    const head = fromVecToListIt([1, 2, 3, 4, 5])
    const output = fromVecToListIt([3, 4, 5])
    let middle1 = middleNodeFloyd(head)
    let middle2 = middleNodeIt(head)
    expect(middle1).toStrictEqual(output)
    expect(middle2).toStrictEqual(output)
})

it("case-02", () => {
    const head = fromVecToListIt([1, 2, 3, 4, 5, 6])
    const output = fromVecToListIt([4, 5, 6])
    let middle1 = middleNodeFloyd(head)
    let middle2 = middleNodeIt(head)
    expect(middle1).toStrictEqual(output)
    expect(middle2).toStrictEqual(output)
})