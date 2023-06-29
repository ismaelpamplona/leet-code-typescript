export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let cur: ListNode | null = head

    while (cur) {
        let nextNode = cur.next
        cur.next = prev
        prev = cur
        cur = nextNode
    }

    return prev
}

export function fromVecToListRec(vec: number[], n = 0): ListNode | null {
    if (n === vec.length) return null
    let head: ListNode | null = new ListNode(vec[n])
    head.next = fromVecToListRec(vec, n + 1)
    return head
}

export function fromListToVec(head: ListNode | null): number[] {
    if (head === null) return []
    let vec: number[] = []
    while (head) {
        vec.push(head.val)
        head = head.next
    }
    return vec

}