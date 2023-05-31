export function maxNumberOfBalloons(text: string): number {
    let ans = text.length
    let balloonMap: Map<string, number> = new Map()
    let textMap: Map<string, number> = new Map()
    let balloonChars = "balloon".split("")
    let textChars = text.split("")

    for (let i = 0; i < balloonChars.length; i++) {
        let entry = balloonMap.get(balloonChars[i])
        if (entry !== undefined) {
            balloonMap.set(balloonChars[i], entry + 1)
        } else {
            balloonMap.set(balloonChars[i], 1)
        }
    }

    for (let i = 0; i < textChars.length; i++) {
        if (balloonMap.has(textChars[i])) {
            const entry = textMap.get(textChars[i]) || 0
            textMap.set(textChars[i], entry + 1)
        }
    }

    for (const [k, v] of balloonMap) {
        let value = textMap.get(k)
        if (value !== undefined) {
            ans = Math.min(ans, Math.floor(value / v))
        } else {
            return 0
        }
    }

    return ans
}