import { ListNode, hasCycleSet, hasCycleFloyds } from "./p141-linked-list-cycle"

it("case-01", () => {
    let head = new ListNode(3)
    let second = new ListNode(2)
    let third = new ListNode(0)
    let fourth = new ListNode(-4)
    head.next = second
    second.next = third
    third.next = fourth
    fourth.next = second
    let result1 = hasCycleSet(head)
    let result2 = hasCycleFloyds(head)
    expect(result1).toBe(true)
    expect(result2).toBe(true)
})

it("case-02", () => {
    let head = new ListNode(1)
    let second = new ListNode(2)
    head.next = second
    second.next = head
    let result1 = hasCycleSet(head)
    let result2 = hasCycleFloyds(head)
    expect(result1).toBe(true)
    expect(result2).toBe(true)
})

it("case-03", () => {
    let head = new ListNode(1)
    let result1 = hasCycleSet(head)
    let result2 = hasCycleFloyds(head)
    expect(result1).toBe(false)
    expect(result2).toBe(false)
})