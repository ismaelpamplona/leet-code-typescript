export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export function middleNodeIt(head: ListNode | null): ListNode | null {
    let vec: ListNode[] = []
    let cur = head
    while (cur) {
        vec.push(cur)
        cur = cur.next
    }

    let mid = Math.floor(vec.length / 2)

    return vec[mid]
}

export function middleNodeFloyd(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

export function fromVecToListIt(vec: number[]): ListNode | null {
    if (vec.length == 0) return null
    let head: ListNode | null = new ListNode(vec[0])
    let cur = head
    for (let i = 1; i < vec.length; i++) {
        cur.next = new ListNode(vec[i])
        cur = cur.next
    }
    return head
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