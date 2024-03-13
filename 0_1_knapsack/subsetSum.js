const subSetSum = (weight, W, n ) => {
   
    const dp = Array(W+1).fill(false)
    dp[0] = true

    console.log(dp)
    for(let i=1; i < n+1 ; i++) {
        for(let w= W; w >= 0; w--) {

            if(weight[i-1] <= w) {
                dp[w] = dp[w - weight[i-1]] || dp[w]
                console.log(dp)
            }
        }
    }

    return dp[W]
}



console.log(subSetSum([3, 34, 4, 12, 5, 2], 9 , 6))