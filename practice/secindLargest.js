
const secondLargest = (arr) => {
  let first = Number.NEGATIVE_INFINITY;
  var second = Number.NEGATIVE_INFINITY;

  for (let i =0 ; i< arr.length; i++){
    if (arr[i] > first){
        second = first
        first = arr[i]
    }
    else{
        if (arr[i] != first && arr[i] > second){
            second = arr[i]
        }
    }
  } return second

  

}


let arrays = [ 1,6,8]
console.log
(secondLargest(arrays))