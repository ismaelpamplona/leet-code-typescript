export function makeGood(s: string): string {
    const stack: string[] = []
    for (const c of s) {
        const l = stack.length
        if (l > 0 && stack[l - 1] === c.toLowerCase() && c.toUpperCase() === c) {
            stack.pop()
        } else if (l > 0 && stack[l - 1] === c.toUpperCase() && c.toLowerCase() === c) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return stack.join('')
}
