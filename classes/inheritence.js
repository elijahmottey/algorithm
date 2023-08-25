class Person {
    constructor (name,age) {
          this.name = name;
          this.age = age;
    }

    work () {
        console.log(`my name is ${this.name}, 
        i am ${this.age} years old
        and i work with Amalitech`);

    
    }
}

class Programmer  extends Person {
    constructor (name, age , yearsOfExperience) {
        super(name,age);
        this.yearsOfExperience = yearsOfExperience;
    }

    coding () {
        console.log(` ${this.name} is coding 
        at his new work station`);
    }
}

// array containing name of workers
let workers = [
    new Programmer('Elijah',20,1),
    new Programmer('Mottey',70,1)
]

function developer (worker) {
    for (let i of worker){
        i.coding()
    }
}
developer(workers)