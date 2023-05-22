function isEnglishLetter(char) {
    return /^[A-Za-z]$/.test(char);
}

export function longestOnes(s: string): string {
    let result = s.split("");
    let right = s.length - 1
    let left = 0

    for (let i = 0; i < s.length; i++) {

        while (left < right) {

            if (!isEnglishLetter(s[left])) {
                left++
            }

            if (!isEnglishLetter(s[right])) {
                right--
            }

            if (isEnglishLetter(s[left]) && isEnglishLetter(s[left])) {
                result[left] = s[right]
                result[right] = s[left]
                left++
                right--

            }

        }
    }

    return result.join('');
}

