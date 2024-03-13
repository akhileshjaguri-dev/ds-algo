/**
 * Swap sort
 *  to find multiple duplicates or missing elements in 1-N array
 */

const swapSort = (arr) => {
const obj = {
    duplicates: [],
    missings:[]
}
let i = 0

while (i < arr.length) {
    if(arr[i] == arr[arr[i] - 1]){
        i++
    } else {
        [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]]
    }
}

for(let i=0;i<arr.length;i++){
    if(arr[i] != i+1) {
        obj.duplicates.push(arr[i])
        obj.missings.push(i+1)
    }
}

return obj
}

console.log(swapSort([3,2,1,3,5,5,7,1]))