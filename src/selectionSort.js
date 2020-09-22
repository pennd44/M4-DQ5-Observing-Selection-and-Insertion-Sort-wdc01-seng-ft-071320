function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
 
for(let i=0; i<arr.length; i++){
  let minimumIndex = i
  for(let j=i+1; j<arr.length; j++){
    if(arr[j]<arr[minimumIndex]){
      minimumIndex=j
    }}
  if(minimumIndex != i){
    let temporary = arr[i]
    arr[i]=arr[minimumIndex]
    arr[minimumIndex]=temporary
  }}



}
