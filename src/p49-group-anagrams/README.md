# p49-group-anagrams
[https://leetcode.com/problems/group-anagrams/](https://leetcode.com/problems/group-anagrams/)


## First approach - categorize by sorted string in a hashmap

- n = length of `strs`
- k = max length of a String in `strs`
- time complexity: $O(n*k*logk)$
- space complexity: O(n*k)