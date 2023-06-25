import { SentinelNode } from "./l001-linked-list"
const util = require('util')

let s_head = new SentinelNode(-1)
let s_tail = new SentinelNode(-1)
let zero = new SentinelNode(0)
let one = new SentinelNode(1)
let two = new SentinelNode(2)
let three = new SentinelNode(3)
let four = new SentinelNode(4)
let five = new SentinelNode(5)
s_head.next = one
one.prev = s_head
one.next = two
two.prev = one
two.next = three
three.prev = two
three.next = four
four.prev = three
four.next = s_tail
s_tail.prev = four
let head: SentinelNode = s_head


it("addToEnd", () => {
    console.log(util.inspect(head, { depth: null, colors: true }))
    head.addToEnd(five, s_tail)
    console.log(util.inspect(head, { depth: null, colors: true }))
})

it("deleteFromEnd", () => {
    head.deleteFromEnd(s_head, s_tail)
    console.log(util.inspect(head, { depth: null, colors: true }))
})


it("addToStart", () => {
    head.addToStart(zero, s_head)
    console.log(util.inspect(head, { depth: null, colors: true }))
})

it("deleteFromStart", () => {
    head.deleteFromStart(s_head, s_tail)
    console.log(util.inspect(head, { depth: null, colors: true }))
})
