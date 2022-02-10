const add = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

const subtract = (num1, num2) => {
    let result = num1 - num2;
    return result;
}

const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

const copyArray = (array) => {
    return [...array];
}

module.exports = {
    add,
    subtract,
    multiply,
    copyArray
}