//Day 2 - Activity 1
// const hiFunc = () => {
//     console.log("Hello Code Nation");
// }
// const fiveTimes = (hi) => {
//     for(let i = 0; i < 5; i++){
//         hi();
//     }
// }
// fiveTimes(hiFunc);

//Activity 2

// let array = [2, 3, 4, 5, 6];
// console.log(array);
// const byThree = array.map(i => i * 3);
// console.log(byThree);

//Activity 3
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

//Zellar's Algorithm - birthday calculator
//Attempt 1

// let d = 10;
// let m = 7;
// let y = 1999;

// let F, L, S, X;

// if (m < 3) {
//     m = m + 12;


//WORKING Example 2
// let F, L, S, X;

// const bday = (d, m, y) => {
//     if (m < 3)
//     {
//         m += 12;
//         y -= 1;
//     }

//     F = Math.floor(y/100);
//     L = y - 100 * F;

//     S = Math.floor((2.6 * m) - 5.39) + Math.floor(L/4) + Math.floor(F/4) + d + L - (2 * F);
//     X = S - (7 * Math.floor(S/7));

//     return X;
// }

// console.log(bday(19,8,1965));