class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null
    let dummy: ListNode | null = new ListNode(-1, head)
    let slow: ListNode | null = dummy.next
    let prev: ListNode | null = dummy.next
    let fast: ListNode | null = dummy.next
    while (slow && fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    if (slow && prev) prev.next = slow.next
    return dummy.next
};

export function fromVecToListIt(vec: number[]): ListNode | null {
    if (vec.length === 0) return null
    let head: ListNode | null = new ListNode(vec[0])
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
    let vec: number[] = []
    let cur = head
    while (cur) {
        vec.push(cur.val)
        cur = cur.next
    }
    return vec
}