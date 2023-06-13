# p290-word-pattern
[https://leetcode.com/problems/word-pattern/](https://leetcode.com/problems/word-pattern/)

## First approach - map + set
- $n$: length of `s`
- $m$: length of `pattern`
- $w$: number of unique words in `s`
- time complexity: $O(n + m)$ - The hashmap contains atmost 26 keys.
- space complexity: $O(w)$ - Hashmap contains at most 26 key-value pairs.
