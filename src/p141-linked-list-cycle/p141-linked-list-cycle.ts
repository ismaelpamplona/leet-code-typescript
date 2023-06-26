export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function hasCycleSet(head: ListNode | null): boolean {
    let set: Set<ListNode> = new Set()
    let h = head
    while (h) {
        if (set.has(h)) return true
        set.add(h)
        h = h.next
    }
    return false
}

export function hasCycleFloyds(head: ListNode | null): boolean {
    let slow = head
    let fast = head
    while (slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast == slow) return true
    }
    return false
}