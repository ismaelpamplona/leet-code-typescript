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
