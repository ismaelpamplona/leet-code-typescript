export function isValid(s: string): boolean {
    const map = new Map<string, string>([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    let stack: string[] = []
    for (const c of s) {
        if (map.has(c)) {
            stack.push(c)
        } else {
            if (stack.length === 0) {
                return false
            }
            const open = stack.pop()
            const close = map.get(open as string)
            if (close !== c) return false
        }
    }

    return stack.length === 0
}