function Person ( name) {
    this.name = name;
}

Person.prototype.money = 75;
Person.prototype.move = function () 
{
    console.log(` I love giving  offering ${this.money}`);
}


let  person = new Person(" Elijah ")
person.move()

