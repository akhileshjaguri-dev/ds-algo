const targetSum = (arr, target) => {
    let sum = 0
     for(let i=0;i<arr.length;i++) {
         sum += arr[i]
     }
 
     if (sum < target || (sum + target) % 2 !== 0) {
        return 0;
    }

     const W = Math.floor((sum + target)/2)
    
     const dp = Array(W+1).fill(0)
     dp[0] = 1
 
     for(let i=1;i<=arr.length;i++) {
         for(let w=W; w>=0;w--) {
             if(arr[i-1] <= w) {
                 dp[w] = dp[w-arr[i-1]] + dp[w]
             }
         }
     }
     console.log(dp)
     return dp[W]
 };


 console.log(targetSum([7,9,3,8,0,2,4,8,3,9],0))