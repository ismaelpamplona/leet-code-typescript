# p383-ransom-note
[https://leetcode.com/problems/ransom-note/description/](https://leetcode.com/problems/ransom-note/description/)


## First approach
- n = number of characters in ransom note
- m = number of characters in magazine
- time complexity: O(nm)
- space complexity: O(n)

## Second approach - HashMap

- m = number of characters in magazine
- k = distinct characters in magazine
- time complexity: O(m)
- space complexity: 
$$
O(k), k <= 26, k -> 1, O(1)
$$

