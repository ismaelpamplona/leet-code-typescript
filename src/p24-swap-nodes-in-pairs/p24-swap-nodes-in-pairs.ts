export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    clone(): ListNode | null {
        return this
    }
}


export function swapPairsIt(head: ListNode | null): ListNode | null {
    if (!head) return null
    let cur: ListNode | null = head
    let dummy = new ListNode(-1, head)
    let prev = dummy
    while (cur && cur.next) {
        let first = cur
        let second = cur.next

        prev.next = second
        first.next = second.next
        second.next = first

        prev = first
        cur = first.next
    }
    return dummy.next
}

export function swapPairsIt2(head: ListNode | null): ListNode | null {
    if (!head) return null
    let n1: ListNode | null = head
    let dummy = new ListNode(-1, head)
    let prev = dummy
    while (n1 && n1.next) {
        let n2 = n1.next

        prev.next = n2
        n1.next = n2.next
        n2.next = n1

        prev = n1
        n1 = n1.next
    }
    return dummy.next
}



export function swapPairsRec(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    let first: ListNode | null = head
    let second: ListNode | null = head.next
    first.next = swapPairsRec(second.next)
    second.next = first
    return second
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
    if (n === vec.length) return null
    let head = new ListNode(vec[n])
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