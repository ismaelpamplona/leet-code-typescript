import { Node } from "./l001-linked-list"
const util = require('util')

let one: Node = new Node(1)
let two: Node = new Node(2)
let three: Node = new Node(3)
let four: Node = new Node(4)
let five: Node = new Node(5)
one.next = two
two.next = three
three.next = five
let head: Node = one

it("test", () => {
    // console.log(util.inspect(head, { depth: null, colors: true }))
})

it("getSum", () => {
    let result = head.getSum()
    expect(result).toBe(11)
})

it("getSumRec", () => {
    let result = head.getSumRec()
    expect(result).toBe(11)
})

it("deleteNode", () => {
    let _one: Node = new Node(1)
    let _two: Node = new Node(2)
    let _three: Node = new Node(3)
    let _four: Node = new Node(4)
    let _five: Node = new Node(5)
    _one.next = _two
    _two.next = _three
    _three.next = _four
    _four.next = _five
    let _head: Node = _one
    _head.deleteNode(_three)
    expect(head).toEqual(_head)
})

it("addNode", () => {
    let _one: Node = new Node(1)
    let _two: Node = new Node(2)
    let _three: Node = new Node(3)
    let _four: Node = new Node(4)
    let _five: Node = new Node(5)
    _one.next = _two
    _two.next = _three
    _three.next = _four
    _four.next = _five
    let _head: Node = _one
    head.addNode(three, four)
    expect(head).toEqual(_head)
})
