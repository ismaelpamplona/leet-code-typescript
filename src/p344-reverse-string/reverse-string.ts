export function reverseString(s: string[]): string[] {
    let i = 0;
    let j = s.length - 1;
    let result = [...s];

    while (i < j) {
        let copy = s[i];
        result[i] = s[j];
        result[j] = copy;
        i++;
        j--;
    }

    return result;
}
