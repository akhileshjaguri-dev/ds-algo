const longestCommonSubSequence = (string1, string2) => {
  let m = string1.length;
  let n = string2.length;
  const W = m > n ? n + 1 : m + 1;
  const dp = Array(W).fill(0);

  for (let i = 1; i <= m ; i++) {
    let prev = 0
    for (let j = 1; j <= n ; j++) {
        const temp = dp[j];
        if(string1[i-1] === string2[j-1]){
            dp[j] = 1 + prev
        } else {
            dp[j] = Math.max(dp[j],dp[j-1])
        }

        prev = temp
    }
  }
  console.log(dp)
console.log(printLongestCommonSubSequence(string1,string2,m,n,dp))
  return dp[W]
};

const printLongestCommonSubSequence = (str1,str2,m,n,dp) => {
  // Backtracking to find the LCS
  let i = m, j = n;
  const lcs = [];
  while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
          lcs.unshift(str1[i - 1]);
          i--;
          j--;
      } else if (dp[j] === dp[j - 1]) {
          j--;
      } else {
          i--;
      }
  }

  return lcs.join('');
}

console.log(longestCommonSubSequence("ABCDGH", "AEDFHR"));
