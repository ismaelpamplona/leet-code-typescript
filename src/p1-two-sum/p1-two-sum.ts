export function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number[]> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const entry = map.get(nums[i]) || [];
        entry.push(i);
        map.set(nums[i], entry);
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        const value = map.get(diff);
        if (value) {
            if (value.length > 1) {
                return [i, value[1]];
            } else if (diff !== nums[i]) {
                return [i, value[0]];
            }
        }
    }

    return [-1, -1];
}