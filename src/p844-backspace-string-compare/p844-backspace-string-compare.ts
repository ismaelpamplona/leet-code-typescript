export function backspaceCompare(s: string, t: string): boolean {
    const build = (s1: string): string => {
        let stack: string[] = []
        for (const c of s1) {
            if (c === "#") stack.length > 0 && stack.pop()
            else stack.push(c)
        }
        return stack.join("")
    }
    return build(s) === build(t)
}