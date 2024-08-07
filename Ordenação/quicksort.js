function quicksort (array, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = Math.floor((left + right) / 2)
    var pivot = array[pivotidx]
    //partição
    while (i<=j){
        while(parseInt(array[i]) < pivot)
        i++
    while(parseInt(array[j])>pivot)
        j--
    
        if (i<=j){
           aux = array[i]
           array[i] = array[j]
           array[j] = aux
           i++
           j--
        }
    }
    if (left < j)
        quicksort(array, left, j)
    if (i < right)
       quicksort(array, i, right)
    return (array)
}
let nums = [25,87,63,55,1,20,27,369,25,24,87,89,54,82,12,15,0,74,58]

quicksort(nums, 0, nums.length -1)
console.log(nums)
