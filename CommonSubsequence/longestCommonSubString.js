const longestCommonSubString = (string1, string2) => {
    const m = string1.length
    const n = string2.length
    const W = m < n ? m+1 : n+1
    const dp = Array(W+1).fill(0)
    let max_length = 0
    let common_string = ""

    for(let i=1; i<=m ; i++) {
        let prev = 0
        for(let j=1; j<=n ; j++) {
            let temp = dp[j]
            if(string1[i-1] === string2[j-1]) {
                dp[j] = 1+ prev
                max_length = Math.max(max_length,dp[j])
            } else {
                dp[j] = 0
            }
            prev = temp
        }
    }
    console.log(dp)
    return max_length
};

console.log(longestCommonSubString("ABDCDEH", "ABCDE"))