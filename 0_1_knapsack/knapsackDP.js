const max = (a, b) => a > b ? a : b

const knapSack = (weight, item, W, n ) => {
   
    const dp = Array(W+1).fill(0)

    for(let i=1; i < n+1 ; i++) {
        for(let w= W; w >= 0; w--) {

            if(weight[i-1] <= w) {
                dp[w] = max(item[i-1]+dp[w - weight[i-1]], dp[w])
            }
        }
    }

    return dp[W]
}



console.log(knapSack([ 10, 20, 30 ], [ 120, 60, 100 ], 50 , 3))