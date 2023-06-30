export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function reverseBetweenIt(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy: ListNode | null = new ListNode(-1, head)
    let before: ListNode | null = dummy
    for (let i = 1; i < left; i++) {
        if (before) before = before.next
    }
    let prev = before
    let cur: ListNode | null = before ? before.next : null
    for (let i = left; i <= right; i++) {
        if (cur) {
            let nextNode = cur.next
            cur.next = prev
            prev = cur
            cur = nextNode
        }

    }
    if (before && before.next) {
        before.next.next = cur
        before.next = prev
    }
    return dummy.next
}

export function fromVecToListIt(vec: number[]): ListNode | null {
    if (vec.length === 0) return null
    let head = new ListNode(vec[0])
    let cur = head
    for (let i = 1; i < vec.length; i++) {
        cur.next = new ListNode(vec[i])
        cur = cur.next
    }
    return head
}

export function fromVecToListRec(vec: number[], n = 0): ListNode | null {
    if (n >= vec.length) return null
    let head = new ListNode(vec[n])
    head.next = fromVecToListRec(vec, n + 1)
    return head
}

export function fromListToVec(head: ListNode | null): number[] {
    if (!head) return []
    let vec: number[] = []
    let cur: ListNode | null = head
    while (cur) {
        vec.push(cur.val)
        cur = cur.next
    }
    return vec
}