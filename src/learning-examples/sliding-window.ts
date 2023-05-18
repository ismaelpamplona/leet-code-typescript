export function findLengthSumsK(nums: number[], k: number): number {
    let left = 0;
    let curr = 0; // current sum
    let ans = 0; // return sliding window length

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr > k) {
            curr -= nums[left];
            left++;
        }
        let size = right - left + 1;
        ans = Math.max(ans, size);
    }

    return ans;
}

export function findLongestSlidingWindow(
    nums: number[],
    k: number
): number[] {
    let left = 0;
    let curr = 0; // current sum
    let longestWindow: number[] = [];
    let currentWindow: number[] = [];

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        currentWindow.push(nums[right]);

        while (curr > k) {
            curr -= nums[left];
            currentWindow.shift();
            left++;
        }

        if (currentWindow.length > longestWindow.length) {
            longestWindow = [...currentWindow]; // Make a copy of the current window
        }
    }

    return longestWindow;
}

export function findLength_1Seq(s: string): number {
    let left = 0;
    let zero_count = 0; // zero quantity
    let ans = 0; // return sliding window length

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            zero_count++;
        }

        while (zero_count > 1) {
            if (s[left] === "0") {
                zero_count--;
            }
            left++;
        }
        let size = right - left + 1;
        ans = Math.max(ans, size);
    }
    return ans;
}

export function findLargestSumAndLengthK(nums: number[], k: number): number {
    let left = 0;
    let sum = 0;
    let curr = 0;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        if (right >= k) {
            curr -= nums[left]
            left++;
        }

        sum = Math.max(sum, curr);
    }

    return sum;
}

export function findLargestSumAndLengthK_2(nums: number[], k: number): number {
    let curr = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }

    sum = curr;

    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - 4];
        sum = Math.max(sum, curr);
    }

    return sum;
}