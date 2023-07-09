export function simplifyPath(path: string): string {
    let stack: string[] = []
    const parts = path.split("/")
    parts.forEach(p => {
        if (p !== ".." && p !== "." && p !== "") stack.push(p)
        else if (p === "..") stack.pop()
    })
    return "/" + stack.join("/")
}