/* 
project pseudocode
create a class and object
properties of the object 
width
heigth
methods
perimeter
Area

*/
class Rectangle{
    // setup object
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // description
    getDescription (){
        console.log(`hi I am a rectangle with a width of ${this.width} , heigth of ${this.height} and finally a color
        of ${this.color}`)
    }
    //Area of a rectangel
    area(){
        return this.width * this.height
    }
    // perimeter of a reactangle
    perimeter(){
        return 2* this.width + 2 * this.height
    }

}

let myRectangle = new Rectangle(3,5,"white")



// run 
myRectangle.getDescription();
console.log(myRectangle.area())
console.log(myRectangle.perimeter())
