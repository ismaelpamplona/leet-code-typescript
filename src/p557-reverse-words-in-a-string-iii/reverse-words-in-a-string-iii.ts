export function reverseWords(s: string): string {
    let strArray: string[] = []
    let right = 0
    let left = 0

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        strArray.push(char)

        if (char === " ") {
            right = i - 1
        }

        if (i === s.length - 1) {
            right = i;
        }

        while (left < right) {
            strArray[left] = s[right]
            strArray[right] = s[left]
            left++
            right--
        }

        if (char === " ") {
            left = i + 1
            right = i + 1
        }
    }

    return strArray.join('');
}