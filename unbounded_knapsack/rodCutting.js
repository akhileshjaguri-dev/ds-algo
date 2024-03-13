const rodCutting = (price) => {
    const W = price.length
    let length = Array(W).fill(0);
    for (let i = 0; i < W; i++) {
        length[i] = i + 1;
    }

    if (W == 0) 
    {
        return 0;
    }

    const dp = Array(W+1).fill(0)

    for(let i = 0; i < length.length; i++) {
        for(let w = 1; w <= W; w++) {
            if(length[i] <= w) {
                dp[w] = Math.max(price[i] + dp[w - length[i]], dp[w])
            }
        }
    }


    
return dp[W]
};

console.log(rodCutting([ 1, 5, 8, 9, 10, 17, 17, 20 ]))