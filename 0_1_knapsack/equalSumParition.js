const equalSumPartion = (arr, n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  if (sum % 2 == 0) {
    return subSetSum(arr, sum/2, n)
  } else {
    return false
  }
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

    return dp[W]
};

console.log(equalSumPartion([1,4,12,7], 4));
