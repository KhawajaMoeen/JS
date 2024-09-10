// DataTypes Conversions

const marks = 67
console.log(typeof marks) //number

// converting into string

const marksInString = String(marks)
console.log(marksInString)
console.log(typeof marksInString) //string

// cheching either marks are now string DT or not through marksInString variable

const add = marksInString + marks

console.log(add) //the answer of this is 6767 as a number added to a string
console.log(typeof add) //string

// converting into Number

//from string
const marksInNumber = Number(marksInString)
console.log(marksInNumber)
console.log(typeof marksInNumber) //converted into number

const addNumbers = marksInNumber + marks

console.log(addNumbers) //the answer of this is 134 as addition is b/w numbers
console.log(typeof addNumbers) //the type of this is number

//from Boolean 

let isHappy = true
let isHappyInNumber = Number(isHappy)

console.log(isHappyInNumber); // the answer will be true as we know that true is equal to 1 in number
console.log(typeof isHappyInNumber); // number

let isSad = false
let isSadInNumber = Number(isSad)

console.log(isSadInNumber); // this will give you 0 as false in number is equal to 0 
console.log(typeof isSadInNumber); // boolean

//from null and undefined

let myStatus = null
let myIdeas = undefined

let myStatusInNumber = Number(myStatus)
let myIdeasInNumber = Number(myIdeas)

console.log(myStatusInNumber); // the answer will be 0, for null to number conversion
console.log(typeof myStatusInNumber); //number
console.log(myIdeasInNumber); //this will return as NaN, for undefined to number conversion
console.log(typeof myIdeasInNumber); //number


// converting into boolean

// from string

let myName = "Moeen"
const myNameInBoolean = Boolean(myName)

console.log(myNameInBoolean); //conerting string to boolean, the answer will be true
console.log(typeof myNameInBoolean); //boolean

// from number

const myPercentage = 85
const myPercentageInBoolean = Boolean(myPercentage)

console.log(myPercentageInBoolean); //this also returns True and its type will be boolean

const temperature = -1
const temperatureInBoolean = Boolean(temperature)

console.log(temperatureInBoolean); // if we put any number except for 0, the boolean value for that will be true either the number is in +sign or -sign

const myNumber = 0
console.log(Boolean(myNumber)); // here answer will be false as the number is 0, type will be boolean

// converting a mix value variable string into number, boolean

//Into Number

const myRollNumber = "EB21103047"
const myRollNumberInNumber = Number(myRollNumber)

console.log(typeof myRollNumberInNumber); // this will give you type is number, as you converted string into number.
console.log(myRollNumberInNumber); // in this you didn't get a number but you'll get NaN (not a number) as its enable to change

//Into Boolean

const myId = "sm1"
const myIdInBoolean = Boolean(myId)

console.log(myIdInBoolean); //it'll give the output as true 
console.log(typeof myIdInBoolean); // boolean

const emptyString = ""
const emptyStringInBoolean = Boolean(emptyString)

console.log(emptyStringInBoolean); //empty string to boolean will return the value false
console.log(typeof emptyStringInBoolean); // boolean





