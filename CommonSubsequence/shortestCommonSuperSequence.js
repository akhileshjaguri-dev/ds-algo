const lcs = (string1, string2, m ,n) => {
    const W = m < n ? m+1 : n+1
   const dp = Array(W).fill(0)

    for(let i=1; i<=m; i++) {
        let prev = 0
        for(let j=1; j<=n; j++) {
            let temp = dp[j]
            if(string1[i-1] === string2[j-1]) {
                dp[j] = 1 + prev
            } else {
                dp[j] = Math.max(dp[j], dp[j-1])
            }
            prev = temp
        }
    }
    console.log(dp)
    return dp[W]
};

const shortestCommonSuperSequence = (string1, string2) => {
    const m = string1.length
    const n = string2.length
    return m + n - lcs(string1, string2, m, n)
   };

console.log(shortestCommonSuperSequence("AGGTAB","GXTXAYB"))