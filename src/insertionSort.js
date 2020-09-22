function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
 for(let i=1; i<arr.length; i++){
  let el = arr[i]
  let j=i-1
  for(j; j>=0 && arr[j]>el; j--){
    arr[j+1]=arr[j]
  }
  arr[j+1]=el
}
return arr



}
