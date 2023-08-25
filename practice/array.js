let arr = [1,2,3,4,45,6,7]
let total = 0
arr.forEach((index) => total = index + total )

console.log(total);
let map = arr.map( (value, index) => {
    if (value === 2) {
        
      return value *  3
      
    }
   
})
console.log(map);

let filter = arr.filter((index) => {
    if(index  <= 4){
      return true 
    }
})
console.log(filter);

let reduce = arr.reduce ( (value , index) =>{
  return  value + index
})

console.log(reduce);


let every = arr.every((index) => {
    if (index % 2 ===0){
        return true
    }
})

console.log(every);

let some = arr.some((value) =>{
    if( value % 2 ===0){
        return true
    }
})
console.log(some)

function nameIndex(arr) {
    if ( arr.indexOf(3) === 4){
        console.log("index found");
    } 
    else{
        console.log("Index not found");
    }
}
nameIndex(arr)
const findNumber =( arr ) =>{
      let find = arr.find((value) =>{
        if(  value == 6){
            return "value found";
        }
        else{
            return "try again"
        }
    })
    return find
}


let find = findNumber(arr)
console.log(find);
const checker = (find) => {
   if ( find === 1){
    return "He exceeded the limit"
   }
   else{
    return "Student fall within the limit"
   }
}


console.log(checker(find));


  let arrlist = [ 673,4,3,2,[34,5,3],8,0,[34,9]] 

  let see = arrlist.flat(2)
  console.log(see);

//   factorial of a number

const factorial = (number) => {
    
    if (number == 0 || number == 1){
        return 1;
    }
    
    else if (number > 1){
        return number * factorial ( number - 1)
       }
    else{
        return "invalid input"
    }
    }


console.log(factorial(5));

console.log(arr.splice(2,3));

console.log(arr.join("$"));