const searchInsertionPosition = (arr, target) => {
const start = 0
const end = arr.length - 1
return searchIndex(arr,target,start,end)
}

const searchIndex = (arr,target,start,end) => {

    if(start > end)
    return start

    const mid = Math.floor((start + end)/2)

    if(arr[mid] == target)
    return mid

    if(arr[mid] > target){
     return searchIndex(arr,target,start,mid-1)
    } else {
        return searchIndex(arr,target,mid+1,end)
    }
}




console.log(searchInsertionPosition([2,5,7,8],10))