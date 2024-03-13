const unboundedKnapsack = (weight,item,W) => {

    const dp = Array(W+1).fill(0)

    for(let i = 0; i < weight.length; i++) {
        for(let w = 1; w <= W; w++) {
            if(weight[i] <= w) {
                dp[w] = Math.max(item[i] + dp[w - weight[i]], dp[w])
            }
        }
    }


    
return dp[W]
};

console.log(unboundedKnapsack([5, 10, 15], [10, 30, 20], 100))