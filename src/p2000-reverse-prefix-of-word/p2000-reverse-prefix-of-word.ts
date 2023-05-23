export function reversePrefix(word: string, ch: string): string {
    let right = 0
    let left = 0
    let result: string[] = []
    let got_it = false

    for (let i = 0; i < word.length; i++) {
        result.push(word[i])
        if (word[i] === ch && !got_it) {
            right = i
            got_it = true;
        }
    }

    while (left < right) {
        [result[left], result[right]] = [result[right], result[left]]
        left += 1
        right -= 1
    }
    return result.join("")
}