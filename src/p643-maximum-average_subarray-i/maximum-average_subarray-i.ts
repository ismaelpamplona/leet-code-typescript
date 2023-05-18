export function findMaxAverage(nums: number[], k: number): number {
    let avg = 0;
    let sum = 0;

    // let vec = [1, 12, -5, -6, 50, 3];

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    avg = sum / k;

    for (let r = k; r < nums.length; r++) {
        sum += nums[r] - nums[r - k];
        avg = Math.max(avg, sum / k);
    }
    return avg;
}

export function findMaxAverage2(nums: number[], k: number): number {
    let avg = 0;
    let sum = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        if (r >= k) {
            sum -= nums[l];
            l++;
        }

        avg = Math.max(avg, sum / k);

    }

    return avg;
}