# p713-subarray-product-less-than-k
[https://leetcode.com/problems/subarray-product-less-than-k/description/](https://leetcode.com/problems/subarray-product-less-than-k/description/)

## First approach - Sliding Window

Using the first test parameters `[10, 5, 2, 6]` as a starting point, I realize that for each index, the number of subarrays ending at that index is the length of the sliding window after reaching that index. 

0. `[10]` (10)
1. `[5]` (5), `[10, 5]` (50)
2. `[2]` (2), `[5, 2]` (10)
3. `[6]` (6), `[2, 6]` (12), `[5, 2, 6]` (60)

- n = number of elements
- time complexity: O(n)
- space complexity: O(1)