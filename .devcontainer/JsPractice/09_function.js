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

let user = {
    userName : "Ali",
    userId : 1001,
    accountPrice : 5000
}

// calling object or keys/values that is coming from unknown user/info
function callingObject(anyObject) {
    return `The object, we are calling is: ${Object.keys(anyObject)} ${Object.values(anyObject)}`
}
console.log(callingObject(user))


//adding an entity to object coming from random data
let entity ={userEmail : "user@gmail.com"} 

function addingEntityInObject(anyObject) {
    return Object.assign(anyObject , entity)
}
console.log(addingEntityInObject(user))

let fruits = ["Apple", "Mango", "Banana"]
function callingArray(getArray){
    let addFruits = getArray.push("dates");
    return addFruits
}

console.log(callingArray(fruits))