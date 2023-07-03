import {
    deleteMiddle,
    fromVecToListIt,
    fromListToVec,
    fromVecToListRec,
} from "./p2095-delete-the-middle-node-of-a-linked-list"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = fromVecToListIt(head)
    const linked2 = fromVecToListRec(head)
    const vec1 = fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    let head1 = fromVecToListIt([1, 3, 4, 7, 1, 2, 6])
    let output = [1, 3, 4, 1, 2, 6]
    let result1 = deleteMiddle(head1)
    expect(fromListToVec(result1)).toStrictEqual(output)
})

it("case-02", () => {
    let head1 = fromVecToListIt([1, 2, 3, 4])
    let output = [1, 2, 4]
    let result1 = deleteMiddle(head1)
    expect(fromListToVec(result1)).toStrictEqual(output)
})

it("case-03", () => {
    let head1 = fromVecToListIt([2, 1])
    let output = [2]
    let result1 = deleteMiddle(head1)
    expect(fromListToVec(result1)).toStrictEqual(output)
})

it("case-04", () => {
    let head1 = fromVecToListIt([1])
    let output = []
    let result1 = deleteMiddle(head1)
    expect(fromListToVec(result1)).toStrictEqual(output)
})

