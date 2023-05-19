
export function prefixSum(nums: number[]): number[] {
    let prefix = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }
    return prefix

    // time complexity: O(n)
    // space complexity: O(n)
}

export function prefixSum2(nums: number[]): number[] {
    let prefix: number[] = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        prefix.push(sum)

    }
    return prefix

    // time complexity: O(n)
    // space complexity: O(n)
}

export function answerQueries(nums: number[], queries: [number, number][], limit: number): boolean[] {
    let prefix: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[i - 1])
    }

    let result: boolean[] = [];
    for (let i = 0; i < queries.length; i++) {
        let right = queries[i][1]
        let left = queries[i][0]
        let sum = prefix[right] - prefix[left] + nums[left]
        result.push(sum < limit)
    }
    return result

    // n = nums.len()
    // time complexity: O(n)
    // space complexity: O(n)
}

export function answerQueries2(nums: number[], queries: [number, number][], limit: number): boolean[] {
    let result: boolean[] = [];

    for (let i = 0; i < queries.length; i++) {
        let sum = 0;

        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            sum += nums[j]
        }

        result.push(sum < limit);
    }
    return result

    // n = nums.len()
    // m = queries.len()
    // time complexity: O(n*m)
    // space complexity: O(n)
}