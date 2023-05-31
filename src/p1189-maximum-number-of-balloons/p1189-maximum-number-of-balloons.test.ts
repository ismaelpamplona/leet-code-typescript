import { maxNumberOfBalloons } from "./p1189-maximum-number-of-balloons"

it("case-01", () => {
    const text = "nlaebolko"
    const result = maxNumberOfBalloons(text)
    expect(result).toBe(1)
})

it("case-02", () => {
    const text = "loonbalxballpoon"
    const result = maxNumberOfBalloons(text)
    expect(result).toBe(2)
})

it("case-03", () => {
    const text = "leetcode"
    const result = maxNumberOfBalloons(text)
    expect(result).toBe(0)
})

it("case-04", () => {
    let text = "hpitp"
    let result = maxNumberOfBalloons(text)
    expect(result).toBe(0)
})

it("case-05", () => {
    let text = "ballon"
    let result = maxNumberOfBalloons(text)
    expect(result).toBe(0)
})

it("case-06", () => {
    let text = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
    let result = maxNumberOfBalloons(text)
    expect(result).toBe(10)
})
