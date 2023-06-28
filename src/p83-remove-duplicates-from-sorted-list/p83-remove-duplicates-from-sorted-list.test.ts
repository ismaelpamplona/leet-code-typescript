import {
    fromVecToListIt,
    fromVecToListRec,
    fromListToVec,
    deleteDuplicatesStraightForward,
    deleteDuplicatesSet,
} from "./p83-remove-duplicates-from-sorted-list"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = fromVecToListIt(head)
    const linked2 = fromVecToListRec(head)
    const vec1 = fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    const head = fromVecToListIt([1, 1, 2])
    const output = fromVecToListIt([1, 2])
    let unique_vec1 = deleteDuplicatesStraightForward(head)
    let unique_vec2 = deleteDuplicatesSet(head)
    expect(unique_vec1).toStrictEqual(output)
    expect(unique_vec2).toStrictEqual(output)
})

it("case-02", () => {
    const head = fromVecToListIt([1, 1, 2, 3, 3])
    const output = fromVecToListIt([1, 2, 3])
    let unique_vec1 = deleteDuplicatesStraightForward(head)
    let unique_vec2 = deleteDuplicatesSet(head)
    expect(unique_vec1).toStrictEqual(output)
    expect(unique_vec2).toStrictEqual(output)
})