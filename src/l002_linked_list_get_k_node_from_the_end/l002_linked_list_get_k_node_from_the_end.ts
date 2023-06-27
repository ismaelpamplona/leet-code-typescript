export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function getNodeFromTheEnd(head: ListNode, k: number): ListNode | null {
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    for (let i = 0; i < k; i++) {
        if (fast) fast = fast.next
    }
    while (slow && fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}