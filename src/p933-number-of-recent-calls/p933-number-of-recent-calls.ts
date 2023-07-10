export class RecentCounter {
    q: number[]
    constructor() {
        this.q = []
    }

    ping(t: number): number {
        while (this.q && this.q[0] < t - 3000) {
            this.q.shift()
        }
        this.q.push(t)
        return this.q.length
    }
}