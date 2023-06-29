# p24-swap-nodes-in-pairs
[https://leetcode.com/problems/swap-nodes-in-pairs/](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Initial provided code
```Typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    let first: ListNode | null = head
    let second: ListNode | null = head.next
    first.next = swapPairs(second.next)
    second.next = first
    return second
};
```

## First approach - Iterative

- n = number of nodes
- time complexity: O(n)
- space complexity: O(1)

## Second approach - Recursive

- n = number of nodes
- time complexity: O(n)
- space complexity: O(n)
