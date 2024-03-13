const countSubSetSum = (arr, W, n) => {
    const dp = Array(W+1).fill(0)
    dp[0] = 1

    for(let i=1;i<n+1;i++) {
        for(let w=W; w>=0;w--) {
            if(arr[i-1] <= w) {
                dp[w] = dp[w-arr[i-1]] + dp[w]
            }
        }
    }
    console.log(dp)
    return dp[W]
};


console.log(countSubSetSum([2,3,5,6,8,10], 10, 6))