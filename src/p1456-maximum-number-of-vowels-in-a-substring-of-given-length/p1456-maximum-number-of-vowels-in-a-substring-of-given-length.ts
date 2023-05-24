export function maxVowels(s: string, k: number): number {
    let max = 0;
    let curr = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {

        if (curr === k) {
            return k
        }

        if (isVowel(s[right])) {
            curr++
        }

        if (right >= k) {
            if (isVowel(s[left])) {
                curr--
            }
            left++
        }

        max = Math.max(max, curr)
    }
    return max
};

function isVowel(char: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(char.toLowerCase())
}