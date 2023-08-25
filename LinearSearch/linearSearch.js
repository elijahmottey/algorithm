
    //O(n)
    
   


const linersearchalgo = (arr,target) => {
    for ( let i=0; i < arr.length; i++ ){
        if (arr[i] === target){
            return i
        }
    }

    return null
}

let results = linersearchalgo([ 3,4,5,6], 4)
console.log(results);
 
const verifieed = (results) => {
    ( results != null) ? console.log("verified") : console.log("Not verified");
}
verifieed( results )