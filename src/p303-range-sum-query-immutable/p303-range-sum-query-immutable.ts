export class NumArray {
    private nums: number[]
    private prefixSum: number[]
    constructor(nums: number[]) {
        this.nums = nums
        this.prefixSum = [nums[0]]
        for (let i = 1; i < nums.length; i++) {
            this.prefixSum.push(nums[i] + this.prefixSum[i - 1])
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0) {
            return this.prefixSum[right];
        } else {
            return this.prefixSum[right] - this.prefixSum[left - 1]
        }
    }
}

