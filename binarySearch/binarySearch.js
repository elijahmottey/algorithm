

// binary search in  javaScript
// function
const binarySearch = (list,target) => {
    var first = 0;
    var last = list.length - 1;
// looping througth the condition
    while(first <= last){
        var midpoint = Math.floor((first + last)/2.0);

        if(list[midpoint] === target){
            return midpoint
        }
        else if( list[midpoint] < target) {
            first = midpoint + 1

        }
        else{
            last = midpoint - 1
        }
       
    } return null

    
}

let values = binarySearch([1,2,3,4,5,6,7,8,9,10], 2)


const  verified = (value) => {
    (value != null)?console.log("verified") : console.log("not verified");
}


verified( values )