const minInsertDelete = (string1, string2) => {
    const m = string1.length
    const n = string2.length
    const W = Math.max(m, n)

    const dp = Array(W+1).fill(0)

    for(let i=1; i<=m; i++) {
        let prev = 0
        for(let j=1; j<=n; j++) {
            let temp = dp[j]
            if(string1[i-1] === string2[j-1]){
                dp[j] = 1+prev
            } else {
                dp[j] = Math.max(dp[j], dp[j-1])
            }
            prev = temp
        }
    }
    const lcsLength = dp[W];
    console.log(dp)
    console.log(lcsLength)
    console.log(`Deletion : ${m -lcsLength}`)
    console.log(`Insertion : ${n - lcsLength}`)
};


minInsertDelete("heap", "pea");