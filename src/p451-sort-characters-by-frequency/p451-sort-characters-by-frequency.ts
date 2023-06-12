export function frequencySort(s: string): string {
    let freqsMap: Map<string, number> = new Map()
    for (let i = 0; i < s.length; i++) {
        let freq = freqsMap.get(s[i])
        freq ? freqsMap.set(s[i], freq + 1) : freqsMap.set(s[i], 1)
    }

    let freqs: [string, number][] = Array.from(freqsMap.entries())
    freqs.sort((a, b) => b[1] - a[1])

    return freqs.map(t => t[0].repeat(t[1])).join('')
}