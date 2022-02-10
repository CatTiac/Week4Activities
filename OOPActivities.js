// Lesson activities

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

//Activity: Car Park
class CarPark {
    constructor(carReg, arrivalTime, departureTime) {
        this._carReg = carReg;
        this._arrivalTime = arrivalTime;
        this._departureTime = departureTime;
        this._charge = 2;
        this._paid = false;
    }
    get carReg() {
        return this._carReg;
    }
    get arrivalTime() {
        return this._arrivalTime;
    }
    get departureTime() {
        return this._departureTime;
    }
    get charge() {
        return this._charge;
    }
    get paid() {
        return this._paid;
    }
    calculateCost() { 
        return (this._departureTime - this._arrivalTime) * this._charge;
    }
    getDeparture(departureTime) {
        this._departureTime = departureTime;
        this.calculateCost();
    }

    makePayment(amountPaid) {
        if (amountPaid >= this.calculateCost()) {
            this._paid = true;
            console.log(`Parking fee has been paid`);
        } else {
            console.log(`Parking has not been paid`);
        }
    }
}

class Staff extends CarPark {
    constructor(carReg, arrivalTime, departureTime, staffNumber, credBalance) {
        super(carReg, arrivalTime, departureTime);
        this._staffNumber = staffNumber;
        this._creditBalance = credBalance;
    }
    applyDiscount() {
        this._charge /= 2;
    }
};

//***Unfinished: Adding a staff array for current staff members***
// let staffRegArray = ["DC45E6", "DY67M6", "EV87H9"]

// const recordCar = (reg) => {
//     for (let i=o; i < staffRegArray.length; i++) {
//         if (reg === staffRegArray[i]) {
//             const staffObj = new Staff(reg, 2, 1);
//             break;
//         }
//     }
//     const regObj = new CarPark(reg, 2, 1);
// }

// recordCar();

const AB12C3 = new CarPark("AB12C3", 2, 10);
const theBoss = new Staff("DC45E6", 5, 9, 98765, 100);

console.log(AB12C3);
console.log(AB12C3.calculateCost());
AB12C3.makePayment(16);
theBoss.applyDiscount();
console.log(theBoss);
console.log(theBoss.calculateCost());
theBoss.makePayment(4);


