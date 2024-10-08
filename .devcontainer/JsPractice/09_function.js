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


// sending message to user
function sendMessage(userName) {
   return `Hello ${userName}, welcome to our website`
}
// console.log(sendMessage("Moeen"))


// returning shopping cart prices to user
function shoppingCart(...price) {
    return price
}
// console.log(shoppingCart(100, 200, 400, 500));


// calling object or keys/values that is coming from unknown user/info
let user = {
    userName : "Ali",
    userId : 1001,
    accountPrice : 5000
}
function callingObject(anyObject) {
    return `The object, we are calling is: ${Object.keys(anyObject)} ${Object.values(anyObject)}`
}
// console.log(callingObject(user))


//adding an entity to object coming from random data
let entity ={userEmail : "user@gmail.com"} 

function addingEntityInObject(anyObject) {
    return Object.assign(anyObject , entity)
}
// console.log(addingEntityInObject(user))


let fruits = ["Apple", "Mango", "Banana", "orange" , "grapes"]

// calling Array
function returningArray(getArray){
    return getArray
}
// console.log(fruits)


// adding or removing values from array coming from random data 
function callingArray(getArray){
    getArray.push = "dates";
    return getArray
}

// console.log(callingArray(fruits))


let itemsAmount = [220, 400, 2000, 5500, 500, 880]
let sum = 0

// for(let i = 0; i < itemsAmount.length; i++){
//     sum += itemsAmount[i]
// }
// console.log(sum)

// adding amount of user total buying items
function totalAmount(getArray) {
    for(let i = 0; i < getArray.length; i++){
        sum += getArray[i]
    }
    return sum
}

console.log(totalAmount(itemsAmount))

