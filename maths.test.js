const { expect } = require("@jest/globals");
const {add, subtract, multiply, copyArray} = require("./maths");

let array = ["1", "2", "3", "4"];

test("two numbers correctly add together", () => {
    expect(add(1, 2)).toBe(3);
});

test("two numbers correctly subract", () => {
    expect(subtract(5, 2)).toBe(3);
});

test("two numbers correctly multiply together", () => {
    expect(multiply(1, 3)).toBe(3);
});

//Has to include .not. because the copy is not the same as the original it is a new copy
test("return is a copy", () => {
    expect(copyArray(array)).not.toBe(array);
});