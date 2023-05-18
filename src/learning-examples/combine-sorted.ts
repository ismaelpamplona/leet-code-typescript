export function combineSorted(arr1: number[], arr2: number[]): number[] {
    let i, j;
    i = j = 0;
    let result: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        result = [...result, ...arr1.slice(i)];
    }

    if (j < arr2.length) {
        result = [...result, ...arr2.slice(j)];
    }

    return result;
}
