import { DoublyNode } from "./l001-linked-list"
const util = require('util')

let one: DoublyNode = new DoublyNode(1)
let two: DoublyNode = new DoublyNode(2)
let three: DoublyNode = new DoublyNode(3)
let four: DoublyNode = new DoublyNode(4)
let five: DoublyNode = new DoublyNode(5)
one.next = two
two.prev = two
two.next = three
three.prev = two
three.next = five
five.prev = three
let head: DoublyNode = one


it("addNode", () => {
    let _one: DoublyNode = new DoublyNode(1)
    let _two: DoublyNode = new DoublyNode(2)
    let _three: DoublyNode = new DoublyNode(3)
    let _four: DoublyNode = new DoublyNode(4)
    let _five: DoublyNode = new DoublyNode(5)
    _one.next = _two
    _two.prev = _one
    _two.next = _three
    _three.prev = _two
    _three.next = _four
    _four.prev = _three
    _four.next = _five
    _five.prev = _four
    let _head: DoublyNode = _one
    head.addNode(five, four)
    console.log(util.inspect(head, { depth: null, colors: true }))
    console.log(util.inspect(_head, { depth: null, colors: true }))
})

it("deleteNode", () => {
    head.deleteNode(four)
    console.log(util.inspect(head, { depth: null, colors: true }))
})
