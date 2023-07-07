export function removeDuplicates(s: string): string {
    let stack: string[] = []
    for (const c of s) {
        let len = stack.length
        if (len > 0 && stack[len - 1] === c) stack.pop()
        else stack.push(c)

    }
    return stack.join('')
}