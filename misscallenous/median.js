const median = (nums1, nums2) => {
    let m = nums1.length
    let n = nums2.length
    let mergedArray = Array(m+n)
    let i = 0
    let j = 0
while(i < m && j < n) {
    if(nums1[i] < nums2[j]){
        mergedArray.push(nums1[i])
        i++
    } else {
        mergedArray.push(nums2[j])
        j++
    }
}

while(i < m) {
    mergedArray.push(nums1[i])
    i++
}

while(j < n) {
    mergedArray.push(nums2[j])
    j++
}


}

median([1,3],[2])