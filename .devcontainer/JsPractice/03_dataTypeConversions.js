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

const marksInNumber = Number(marksInString)
console.log(marksInNumber)
console.log(typeof marksInNumber) //converted into number

const addNumbers = marksInNumber + marks

console.log(addNumbers) //the answer of this is 134 as addition is b/w numbers
console.log(typeof addNumbers) //the type of this is number

