# p1248-count-number-of-nice-subarrays
[https://leetcode.com/problems/count-number-of-nice-subarrays/](https://leetcode.com/problems/count-number-of-nice-subarrays/)


## First approach - sliding 

1. Iterate through all the numbers and increment the current odd counter whenever we encounter odd number.
2. Once encountered k odd numbers, increment the left pointer until we reach the first odd number during this process we subtract the odd number and count the number of even numbers.
3. Update the total with the number of even numbers.

- n = number of elements
- time complexity: O(n)
- space complexity: O(1)


## Second approach - prefix + hashing 

1. Track the number of odd numbers we have seen in the current prefix. 
2. If `curr - k` exists, it means that there was a prefix earlier with `curr - k` odd numbers. The current prefix has curr odd numbers.
3. The difference between them represents the number of odd numbers in the subarray between the prefixes, which is `curr - (curr - k) = k` odd numbers.

- n = number of elements
- time complexity: O(n)
- space complexity: O(n)