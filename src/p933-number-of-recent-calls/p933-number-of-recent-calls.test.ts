import { RecentCounter } from "./p933-number-of-recent-calls"

it("case-01", () => {
    const rc = new RecentCounter()
    const pings: number[] = [1, 100, 3001, 3002]
    const result: number[] = []
    for (const p of pings) {
        result.push(rc.ping(p))
    }
    const output: number[] = [1, 2, 3, 3]
    expect(output).toEqual(result)
})

it("case-02", () => {
    const rc = new RecentCounter()
    const pings: number[] = [1, 100, 3001, 4000]
    const result: number[] = []
    for (const p of pings) {
        result.push(rc.ping(p))
    }
    const output: number[] = [1, 2, 3, 2]
    expect(output).toEqual(result)
})
