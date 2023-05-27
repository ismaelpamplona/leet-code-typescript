# p2248_intersection_of_multiple_arrays
[https://leetcode.com/problems/intersection-of-multiple-arrays/](https://leetcode.com/problems/intersection-of-multiple-arrays/)


## First approach - hashing

```Typescript
let map: Map<number, number> = new Map()

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        let entry = map.get(nums[i][j])
        if (entry) {
            map.set(nums[i][j], entry + 1)
        } else {
            map.set(nums[i][j], 1)
        }
    }
}
```
- time complexity: $O(n)$
- space complexity: $O(n)$

```Typescript
for (const k of map.keys()) {
    let entry = map.get(k)
    if (entry === nums.length) {
        result.push(k)
    }
}
```
Then, there can be at most m elements inside `result` 

- time complexity: $O(m)$
- space complexity: $O(1)$

```Typescript
result.sort((a, b) => a - b)
```
- time complexity: $O(nlogn)$
- space complexity: $O(1)$

## Total time and space complexity

- time complexity: $O(n⋅m+m⋅logm)=O(m⋅(n+logm))$
- space complexity: $O(n⋅m)$

