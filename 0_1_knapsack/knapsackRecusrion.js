const max = (a, b) => a > b ? a : b

const knapSack = (weight, item, W, n ) => {

    if(n==0 || W==0)
    return 0;

    if(weight[n-1] > W){
        return knapSack(weight, item, W, n-1)
    } else {
        return max(item[n-1] + knapSack(weight, item, W - weight[n-1], n-1) 
        , knapSack(weight, item, W, n-1))
    }
}



console.log(knapSack([ 10, 20, 30 ], [ 60, 100, 120 ], 50 , 3))