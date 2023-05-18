export function sortedSquares(nums: number[]): number[] {
    const size = nums.length;
    let result: number[] = new Array(size);

    let left = 0;
    let right = nums.length - 1;

    for (let i = size - 1; i >= 0; i--) {
        let number: number;
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            number = nums[left];
            left++;
        } else {
            number = nums[right];
            right--;
        }
        result[i] = number * number;
    }
    return result;
}
