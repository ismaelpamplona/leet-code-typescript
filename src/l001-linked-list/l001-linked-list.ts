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
