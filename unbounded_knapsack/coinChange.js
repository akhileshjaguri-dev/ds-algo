const coinChange = (coins, sum) => {
    const dp = Array(sum+1).fill(0)
    dp[0] = 1

    for(const element of coins) {
        for(let w=0; w<=sum; w++) {
            if(element <= w) {
                dp[w] += dp[w - element]
            }
        }
    }
 console.log(dp)
    return dp[sum]
};


console.log(coinChange([1,2,3],4))