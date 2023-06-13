# p567-permutation-in-string
[https://leetcode.com/problems/permutation-in-string/](https://leetcode.com/problems/permutation-in-string/)


## First approach - map + sliding window (optimized)
- $l_1$ = length of `s1` 
- $l_2$ = length of `s2`
- time complexity: $O(l_1 + (l_2 - l_1))$ - The hashmap contains atmost 26 keys.
- space complexity: $26 O(1) = O(1)$ - Hashmap contains at most 26 key-value pairs.
