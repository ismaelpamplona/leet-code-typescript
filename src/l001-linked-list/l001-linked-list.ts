export class Node {
    val: number
    next: Node | null

    constructor(val: number) {
        this.val = val
        this.next = null
    }

    getSum(): number {
        let ans = 0
        let head: Node | null = this
        while (head) {
            ans += head.val
            head = head.next
        }
        return ans
    }

    getSumRec(): number {
        if (!this) return 0
        return this.val + ((this.next as Node)?.getSumRec() || 0)
    }

    addNode(prevNode: Node, nodeToAdd: Node): void {
        nodeToAdd.next = prevNode.next
        prevNode.next = nodeToAdd
    }

    deleteNode(prevNode: Node): void {
        prevNode.next = (prevNode.next as Node).next
    }
}

export class DoublyNode {
    val: number
    next: DoublyNode | null
    prev: DoublyNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
        this.prev = null
    }

    addNode(nextNode: DoublyNode, nodeToAdd: DoublyNode): void {
        nodeToAdd.next = nextNode
        nodeToAdd.prev = nextNode.prev
        if (nextNode.prev) nextNode.prev.next = nodeToAdd
        nextNode.prev = nodeToAdd
    }

    deleteNode(node: DoublyNode): void {
        if (node.prev !== null) {
            node.prev.next = node.next
            if (node.next !== null) node.next.prev = node.prev.next
        }
    }
}


export class SentinelNode {
    val: number
    next: SentinelNode | null
    prev: SentinelNode | null

    constructor(val: number) {
        this.val = val
        this.prev = null
        this.next = null
    }

    addToEnd(nodeToAdd: SentinelNode, tail: SentinelNode): void {
        nodeToAdd.next = tail
        nodeToAdd.prev = tail.prev
        if (tail.prev) tail.prev.next = nodeToAdd
        tail.prev = nodeToAdd

    }

    deleteFromEnd(head: SentinelNode, tail: SentinelNode): void {
        if (head.next !== tail) {
            if (tail.prev?.prev) tail.prev.prev.next = tail
            if (tail.prev) tail.prev = tail.prev.prev
        }
    }

    addToStart(nodeToAdd: SentinelNode, head: SentinelNode): void {
        nodeToAdd.prev = head
        nodeToAdd.next = head.next
        if (head.next) head.next.prev = nodeToAdd
        head.next = nodeToAdd
    }

    deleteFromStart(head: SentinelNode, tail: SentinelNode): void {
        if (head.next !== tail) {
            if (head.next?.next) head.next.next.prev = head
            if (head.next) head.next = head.next.next
        }
    }
}


