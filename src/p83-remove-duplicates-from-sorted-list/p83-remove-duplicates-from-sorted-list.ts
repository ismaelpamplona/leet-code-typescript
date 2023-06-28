export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function deleteDuplicatesStraightForward(head: ListNode | null): ListNode | null {
    let cur = head
    while (cur && cur.next) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

export function deleteDuplicatesSet(head: ListNode | null): ListNode | null {
    if (!head) return null
    const set: Set<number> = new Set()
    const dummy: ListNode | null = new ListNode(0)
    let cur = dummy
    let node: ListNode | null = head

    while (node) {
        if (!set.has(node.val)) {
            set.add(node.val)
            cur.next = new ListNode(node.val)
            cur = cur.next
        }
        node = node.next
    }

    return dummy.next
}

export function deleteDuplicatesFloyd(head: ListNode | null): ListNode | null {
    return null
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
    let head: ListNode | null = new ListNode(vec[n])
    head.next = fromVecToListRec(vec, n + 1)
    return head
}

export function fromListToVec(head: ListNode | null): number[] {
    if (!head) return []
    let vec: number[] = []
    while (head) {
        vec.push(head.val)
        head = head.next
    }
    return vec
}