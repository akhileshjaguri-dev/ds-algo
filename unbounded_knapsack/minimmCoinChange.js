const minimumCoinChange = (coins, sum) => {

    const dp = Array(sum+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for(const coin of coins){
        for(let w=0; w <= sum ; w++) {
            if(coin <= w) {
                dp[w] = Math.min(1 + dp[w - coin], dp[w])
            }
        }
    }
    return dp[sum]
};

console.log(minimumCoinChange([20, 9, 5],30))