# p2225-find-players-with-zero-or-one-losses
[https://leetcode.com/problems/find-players-with-zero-or-one-losses](https://leetcode.com/problems/find-players-with-zero-or-one-losses)

## First approach - HashMap

### Time complexity: $O(n⋅log⁡n)$

- For each match in matches, we need to update the value of both players in losses_count. Operations on hash map require $O(1)$ time. Thus the iteration over matches takes $O(n)$ time.
- We need to store two kinds of players in two arrays and sort them. In the worst-case scenario, there may be $O(n)$ players in these arrays, so it requires $O(n⋅log⁡n)$ time.
- To sum up, the time complexity is $O(n⋅log⁡n)$.
  
### Space complexity: $O(n)$

- The hash map to store all players and their number of losses, which requires $O(n)$ space in the worst-case scenario.