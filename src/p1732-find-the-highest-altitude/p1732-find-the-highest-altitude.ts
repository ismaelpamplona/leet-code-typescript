export function largestAltitude(gain: number[]): number {
    let curr = 0;
    let highest = 0;

    for (let i = 0; i < gain.length; i++) {
        curr += gain[i];
        highest = Math.max(curr, highest);
    }

    return highest;

};