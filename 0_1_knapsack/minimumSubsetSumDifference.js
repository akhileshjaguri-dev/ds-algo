const minimumSubsetSumDiff = (arr,n) => {

    let range = 0;

  for (let i = 0; i < n; i++) {
    range += arr[i];
  }

    // find the subset first
   const vector = subSetSum(arr,range,n)
   let min = Number.MAX_SAFE_INTEGER
   for(let i=0;i<vector.length/2;i++) {
    if(vector[i])
    min = Math.min(min, range - 2 * i)
   }

   return min
};

const subSetSum = (arr, W, n) => {
    const dp = Array(W+1).fill(false)
    dp[0] = true

    for(let i=1; i< n+1 ; i++) {
        for(let w=W ; w >=0 ; w--) {
            if(arr[i-1] <= w) {
                dp[w] = dp[w - arr[i-1]] || dp[w] 
            }
        }
    }

    return dp;
};

console.log(minimumSubsetSumDiff([1,6,11,5], 4))