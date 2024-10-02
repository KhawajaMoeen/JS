// Functions

// we can write function in multiples ways 

1.
// function addTwoNumbers(num1 , num2) {
//     console.log(num1 + num2)
// }

// addTwoNumbers(4, 5)

2. 
// function addTwoNumbers(num1 , num2) {
//     return num1 + num2
// }

// const result = addTwoNumbers(4, 5)
// console.log("result : ", result);

function sendMessage(userName) {
   return `Hello ${userName}, welcome to our website`
}

console.log(sendMessage("Moeen"))

function shoppingCart(...price) {
    return price
}

console.log(shoppingCart(100, 200, 400, 500));
