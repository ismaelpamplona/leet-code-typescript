import { ListNode, getNodeFromTheEnd } from "./l002_linked_list_get_k_node_from_the_end"

it("case-01", () => {
    let head = new ListNode(1)
    let second = new ListNode(2)
    let third = new ListNode(3)
    let fourth = new ListNode(4)
    let fifth = new ListNode(5)
    head.next = second
    second.next = third
    third.next = fourth
    fourth.next = fifth
    let result1 = getNodeFromTheEnd(head, 2)
    expect(result1).toEqual(fourth)
})