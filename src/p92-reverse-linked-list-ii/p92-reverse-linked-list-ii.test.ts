import {
    reverseBetweenIt,
    reverseBetweenRec,
    fromVecToListIt,
    fromVecToListRec,
    fromListToVec,
} from "./p92-reverse-linked-list-ii"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = fromVecToListIt(head)
    const linked2 = fromVecToListRec(head)
    const vec1 = fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    const head1 = fromVecToListRec([1, 2, 3, 4, 5])
    const head2 = fromVecToListRec([1, 2, 3, 4, 5])
    const output = [1, 4, 3, 2, 5]
    const reversed1 = reverseBetweenIt(head1, 2, 4)
    const reversed2 = reverseBetweenRec(head2, 2, 4)
    expect(fromListToVec(reversed1)).toStrictEqual(output)
    expect(fromListToVec(reversed2)).toStrictEqual(output)
})

it("case-02", () => {
    const head1 = fromVecToListRec([5])
    const head2 = fromVecToListRec([5])
    const output = [5]
    const reversed1 = reverseBetweenIt(head1, 1, 1)
    const reversed2 = reverseBetweenRec(head2, 1, 1)
    expect(fromListToVec(reversed1)).toStrictEqual(output)
    expect(fromListToVec(reversed2)).toStrictEqual(output)
})

it("case-03", () => {
    const head1 = fromVecToListRec([1, 2, 3, 4, 5, 6, 7])
    const head2 = fromVecToListRec([1, 2, 3, 4, 5, 6, 7])
    const output = [1, 2, 5, 4, 3, 6, 7]
    const reversed1 = reverseBetweenIt(head1, 3, 5)
    const reversed2 = reverseBetweenRec(head2, 3, 5)
    expect(fromListToVec(reversed1)).toStrictEqual(output)
    expect(fromListToVec(reversed2)).toStrictEqual(output)
})