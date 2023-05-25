export function checkIfPangram(sentence: string): boolean {
    const map: Set<string> = new Set()

    for (let i = 0; i < sentence.length; i++) {
        map.add(sentence[i])
    }

    for (let code = 97; code <= 122; code++) {
        const letter = String.fromCharCode(code)
        if (!map.has(letter)) return false
    }
    return true
};