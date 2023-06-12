# p451-sort-characters-by-frequency
[https://leetcode.com/problems/sort-characters-by-frequency/](https://leetcode.com/problems/sort-characters-by-frequency/)


## First approach - HashMap

- n = number of nodes
- time complexity: $O(n \log n)$ OR $O(n + k \log k)$
    - Bulding the hashmap: $O(n)$
    - Bulding the vector of tuples from hashmap: $O(k)$
    - Sorting the vector of tuples: $O(k \log k)$
    - Building the String result: $O(n)$
    - Result: $O(n) + O(k) + $O(k \log k) + O(n)$ 
- space complexity: $O(n)$
