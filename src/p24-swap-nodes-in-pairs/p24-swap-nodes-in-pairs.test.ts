import {
    fromListToVec,
    fromVecToListIt,
    fromVecToListRec,
    swapPairsIt,
    swapPairsRec,
} from "./p24-swap-nodes-in-pairs"

it("case-transformation", () => {
    const head = [1, 2, 3, 4, 5]
    const linked1 = fromVecToListIt(head)
    const linked2 = fromVecToListRec(head)
    const vec1 = fromListToVec(linked1)
    expect(linked1).toStrictEqual(linked2)
    expect(head).toStrictEqual(vec1)
})

it("case-01", () => {
    const head1 = fromVecToListIt([1, 2, 3, 4])
    const head2 = fromVecToListIt([1, 2, 3, 4])
    const output = fromVecToListIt([2, 1, 4, 3])
    let swapped1 = swapPairsIt(head1)
    let swapped2 = swapPairsRec(head2)
    expect(swapped1).toStrictEqual(output)
    expect(swapped2).toStrictEqual(output)
})

it("case-02", () => {
    const head1 = fromVecToListIt([])
    const head2 = fromVecToListIt([])
    const output = fromVecToListIt([])
    let swapped1 = swapPairsIt(head1)
    let swapped2 = swapPairsRec(head2)
    expect(swapped1).toStrictEqual(output)
    expect(swapped2).toStrictEqual(output)
})

it("case-03", () => {
    const head1 = fromVecToListIt([1])
    const head2 = fromVecToListIt([1])
    const output = fromVecToListIt([1])
    let swapped1 = swapPairsIt(head1)
    let swapped2 = swapPairsRec(head2)
    expect(swapped1).toStrictEqual(output)
    expect(swapped2).toStrictEqual(output)
})