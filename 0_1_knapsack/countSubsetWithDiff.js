const countSubSetWithDiff = (arr, diff, n) => {
   let sum = 0
    for(let i=0;i<n;i++) {
        sum += arr[i]
    }

    const W = (sum + diff)/2
   
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


console.log(countSubSetWithDiff([1,2,3,1,2],1,5))