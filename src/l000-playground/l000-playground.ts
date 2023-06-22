class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
    }
}

export function main(): void {
    let one: ListNode = new ListNode(1)
    let two: ListNode = new ListNode(2)
    let three: ListNode = new ListNode(3)
    one.next = two
    two.next = three
    let head: ListNode = one

    console.log(head)
}