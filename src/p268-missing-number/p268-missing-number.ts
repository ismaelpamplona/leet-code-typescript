export function missingNumberHash(nums: number[]): number {

    const map: Set<number> = new Set();

    for (let i = 0; i < nums.length; i++) {
        map.add(nums[i]);
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!map.has(i)) {
            return i;
        }
    }

    return -1;
}

export function missingNumberXor(nums: number[]): number {
    let expectedXor = 0;

    for (let i = 0; i <= nums.length; i++) {
        expectedXor ^= i;
    }

    let realXor = 0;
    for (let i = 0; i <= nums.length; i++) {
        realXor ^= nums[i];
    }

    return expectedXor ^ realXor;
}

export function missingNumberSum(nums: number[]): number {
    let expectedSum = 0;

    for (let i = 0; i <= nums.length; i++) {
        expectedSum += i;
    }

    let realSum = 0;
    for (let i = 0; i < nums.length; i++) {
        realSum += nums[i];
    }

    return expectedSum - realSum;
}