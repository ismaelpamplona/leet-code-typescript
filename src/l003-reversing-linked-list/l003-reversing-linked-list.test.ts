import {
    fromVecToListRec,
    fromListToVec,
    reverseList
} from "./l003-reversing-linked-list"

it("case-01", () => {
    const head = fromVecToListRec([1, 2, 3, 4, 5])
    const output = [5, 4, 3, 2, 1]
    const reversed = reverseList(head)
    const expected = fromListToVec(reversed)
    expect(expected).toStrictEqual(output)
})