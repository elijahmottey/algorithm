 class GetterSetters{
    // setup object
    constructor(width){
      this.width = width;
      this.height = width;
      this.count = 0;
    }
    
    // getter
    get square () {
        this.count++;
        return this.height * this.width
    }

    // setter
    set square (square) {
      this.height= Math.sqrt(square);
      this.width = Math.sqrt(square)
    }

    // parameter
   get paramenter () {
        return this.width * 2  + this.height * 2
    }
    set paramenter ( paramenter ) {
        this.height = Math.floor(Math.sqrt(paramenter));
        this.width = Math.floor(Math.sqrt(paramenter));
    }

 }
//  object
let myresults = new GetterSetters (40);
myresults.square=30;
myresults.paramenter =78;
console.log(myresults.height);
console.log(myresults.width);
console.log(myresults.square)
console.log(
    myresults.paramenter
);
console.log(myresults.count);