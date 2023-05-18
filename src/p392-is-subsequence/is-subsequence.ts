export function isSubsequence(s: string, t: string): boolean {
    let sArr = s.split("");
    let tArr = t.split("");
    let i, j;
    i = j = 0;

    while (i < sArr.length && j < tArr.length) {
        if (sArr[i] === tArr[j]) {
            i++;
            j++;
        }
        j++;
    }
    return i === sArr.length;
}
