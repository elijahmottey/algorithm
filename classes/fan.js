class Fan {


    constructor (brand,color,numberOfBlades, price) {
        // fan properties
        this.brand = brand;
        this.color = color;
        this.numberOfBlades = numberOfBlades;
        this.price = price
        this.count = 0;

    }

    // method acclerate
    get details () {
        console.log(`${this.brand} fans are very affordable at a cool price of ${this.price}
        we have different color base on your color preference like ${this.color} `);
    }

    typeOffun () {
        this.count++;
        (this.numberOfBlades === 4) ? console.log(`The fan has small blades`) : console.log(`Fan has big blades`);
    }


}

// instance
let fan = [
    new Fan ( "binatone", "white" , 3,  200),
    new Fan ( "sonic", "black" , 4,  8900),
    new Fan ( "binatone", "blue" , 2,  9000)
]

for(let i of fan){
    i.details;
    i.typeOffun()
    
}

