let stringLet = "let string";
var stringVar = "var string";
const newString = () => {
    let stringLet = "new let string";
    var stringVar = "new var string";
    console.log(`Inside function: ${stringLet}`); //new
    console.log(`Inside function: ${stringVar}`); //new
}
newString();
console.log(`Outside function: ${stringLet}`); //old
console.log(`Outside function: ${stringVar}`); //old
console.log();
console.log(stringVar);