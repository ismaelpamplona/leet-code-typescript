export function canConstruct(r: string, m: string): boolean {
    let rn = r;
    for (let i = 0; i < m.length; i++) {
        const currMagazine = m[i];
        for (let j = 0; j < rn.length; j++) {
            if (currMagazine === rn[j]) {
                rn = rn.slice(0, j) + rn.slice(j + 1);
                break;
            }
        }

        if (rn.length === 0) {
            break;
        }
    }

    return rn.length === 0;
}
