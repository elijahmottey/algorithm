const recursion = (arr, target) => {
    if (arr.length == 0){
        return false
    }
    else{
        let midpoint = Math.floor(arr.length/2)
        if ( arr[midpoint] === target){
            return true
        }
        else{
            if(arr[midpoint] < target){
                return recursion(arr[midpoint] + 1 , target)
            }
            else{
                return recursion (arr[midpoint]- 1, target)
            }
        }
    }
}

let arr =[1,2,3,4,5,6,7]
console.log(arr.length);
let value =  recursion(arr,6)

const verified = (value) => {
    console.log("target is " + value);
}

verified(value)