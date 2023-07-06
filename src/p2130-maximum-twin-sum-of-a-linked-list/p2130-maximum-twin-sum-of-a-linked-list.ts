
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function pairSum(head: ListNode | null): number {
    let slow = head
    let fast = head
    let last = head
    let maxSum = 0
    while (slow && fast && fast.next) {
        last = slow
        slow = slow.next
        fast = fast.next.next
    }

    let prev: ListNode | null = null
    while (slow) {
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    if (last) last.next = prev
    let start = head
    while (start && prev) {
        maxSum = Math.max(maxSum, start.val + prev.val)
        start = start.next
        prev = prev.next
    }
    return maxSum
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