//Implicit Type Coercion 
//answer = console.log(2+3+ "4");


//This Keyword
/* const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); */

//Promise in JS
/* let checkEven = new Promise((resolve, reject) => {
    let number = "23";
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure
 */

// map Function
/* const numbers = [1, 2, 3, 4, 5];
const mappedNumbers = numbers.map(function(num) {
    return num * num;  
});
console.log(mappedNumbers); */


//JavaScript Function to Calculate the Sum of Two Numbers.
/* function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));  */




// Find the largest number in the array
function findLargestElement(nestedArray) {
    // Flatten the nested array into a single array
    const flatArray = nestedArray.flat();
    // Find the largest number
    return Math.max(...flatArray);
}
const myArray = [[3, 5, 1], [7, 9, 2], [6, 8, 4]];
console.log(findLargestElement(myArray)); 



