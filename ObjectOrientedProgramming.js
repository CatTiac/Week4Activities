//Lesson activities

// let var1 = "I am a variable";
// let var2 = 55;
// let var3 = true;

// let array = [
//     "thing1",
//     "thing2",
//     "thing3",
//     "thing4",
// ];

// array.push("thing5");

// console.log(array);

// for (let i  = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let balance = "100";
// let wAmount = "10";

// function withdraw(wAmount) {
//     if (balance >= wAmount) {
//         console.log(balance -= wAmount)
//         console.log(`withdrawn: £${wAmount} . Your balance is £${balance}`)
//     }
// }

// withdraw(wAmount);
//  //OR
// const wDraw = (num) => {
//     return balance -= num;
// }

// console.log(wDraw(wAmount));

// Bunny Object
// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     //Below is a getter - It retrieves info. from within an object and can be referenced throughout.
//     get name() {
//         return this._name;
//     },
//     get drink() {
//         this._thirst -= 10;
//         return this._thirst;
//     },
//     get wiggley() {
//         // this._isWiggling = true;
//         return this._isWiggling;
//     }
// }

// console.log(rosie.name);
// console.log(rosie.drink);
// console.log(rosie.wiggley);

// //CLASS - Object building template - constructive method - No predetermined values or key value pairs
// class Bunny {
//     constructor(name) {
//         this._name = name;
//         this._hops = 0;
//     }
//     get name() {
//         return this._name;
//     }
//     get hops() {
//         return this._hops;
//     }
//     increaseHops() {
//         this._hops++;
//     }
// }
// //To pass in data
// const rosie = new Bunny("Rosie");

//CarPark activity
// class Cars {
//     constructor(name) {
//         this._carReg = name,
//         this._time = 0,
//         this._charge = 1.50,
//     }
//     get name() {
//         return this._carReg;
//     }
//     get time() {
//         return this._time;
//     }
//     get charge() {
//         return this._charge;
//     }
    // calculateCharge(sum) {
    //     this._time*this._charge;
    //     return sum;
    // }
// }


// const DC450PS = new Cars("DC450PS");
// const newTime = new time("5");
// const charge = new charge (1.50);

// console.log(DC450PS);
// calculateCharge();

// function sum(num1, num2) {
//     return num1 + num2; 
// }

// sum(2, 4);

//In lesson activity

// class Enemy {
//     constructor(name, health, weapon1, weapon2) {
//         this._name = name;
//         this._health = health;
//         // this._weapons = weapon1, weapon2;
//     }
//     get name() {
//         return this._name;
//     }
//     get health() {
//         return this._health;
//     }
//     get _weapons() {
//         return this._weapons;
//     }
//     reduceHealth(amount) {
//         return this._health -= amount;
//     }
// }

// const enemy1 = new Enemy("Jeff", 1000, "Sword", "Bow");
// const enemy2 = new Enemy("Betty", 5000);

// console.log(enemy1.health);
// console.log(enemy1.reduceHealth(100));
// console.log(enemy1.health);
// console.log(enemy2.reduceHealth(100));
// console.log(enemy2.health);

//Automated Car Park
class Cars {
    constructor(carReg, arrivalTime, charge) {
        this._carReg = carReg;
        this._arrivalTime = arrivalTime;
        // this._departureTime = departureTime;
        this._charge = charge;
        this._paid = false;
    }
    get carReg() {
        return this._carReg;
    }
    get arrivalTime() {
        return this._arrivalTime;
    }
    // get departureTime() {
    //     return this._departureTime;
    // }
    get charge() {
        return this._charge;
    }
    getDepartureTime(departureTime) {
        this.departureTime = departureTime;
    }
    calculateCost() {
        return (this.departureTime - this.arrivalTime) * this._charge;
    }
    makePayment(amountPaid) {
        if (amountPaid >= this.calculateCost()) {
        console.log(`Parking has been paid`);
        this._paid = true;
    } else {
        console.log(`Parking has not been paid`);
    }
}}

const ABC1D23 = new Cars("ABC1D23", 2, 1.50);
ABC1D23.getDepartureTime(11);
console.log(ABC1D23.calculateCost());
console.log(ABC1D23);
console.log(ABC1D23.makePayment(13.5));
