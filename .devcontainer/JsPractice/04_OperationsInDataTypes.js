// Operations of DataTypes

//Numbers

//ADDITION
const marksInEnglish = 67
const marksInUrdu = 76
const marksInIslamiat = 77

const obtMinorMarks = marksInEnglish + marksInUrdu + marksInIslamiat

console.log(obtMinorMarks);

//Subtraction

const fixedPrice =270
const originalPrice = 300

const discountOf = originalPrice - fixedPrice

console.log(`The discount is ${discountOf} Rs only.`);


//Some Multipe Operations

const totalMinorMarks = 275
const percentageOfMinorMarks = (obtMinorMarks/totalMinorMarks) * 100

console.log(percentageOfMinorMarks);

//Divide / & Modulus %

const quotient = obtMinorMarks / totalMinorMarks
const remainder = totalMinorMarks % obtMinorMarks

console.log(quotient);
console.log(remainder);

//Multiplication

const numberOfSoaps = 5
const priceOfOneSoap = 30

const totalAmount = numberOfSoaps * priceOfOneSoap

console.log(totalAmount, "Rs");

//Use of Powers

const number = 4
const squareOfNumber = number ** number // this stand for 4 to the power 4 and its answer is obv 256 and we use ** to represent the power at the number

console.log(squareOfNumber);

//Increment ++ and Decrement --

//post Increment and Decrement

let a = 10
let b = 11

console.log(a); // value 10 as given
console.log(b); // value 11 as given

// here incrementing the variable by assigning them into new variables x and y
const x = a++  
const y = b++

//Here the value of x and y will remain same as a and b, 10 and 11 respectively and after this, if we print a and b they will be changed into 11 and 12, this is how increment and decrement works
// console.log(x); 
// console.log(y);

//Here the increment and decrement will work and change the value of a and b 
// console.log("a = ",a);
// console.log("b = ",b);

//so post increment and decrement means the value will be changed after it applies, it will remain same before calling the incremented variables again
//same post decrement will works

// Post Decrement

const r = a--
const s = b--

console.log("decrement a = ",a);
console.log("decrement b = ",b);





 //Pre Increment ++a

 let c = 14
 let d = 15

 const p = ++c;
 const q = ++d;

 console.log(p , q); //as we saw in post inc/dec that the increment and decrement applies when we call the variables that we have inc/dec then they changed there value and increase or decrease.
 console.log(c, d); //but in this as we assign new variables for pre-increment, so now the answer is changed as of the post inc/dec it'll increase or decrease the value first then do further operations. 
 
// same for pre-decrement 

const m = --c // here values of c and d will be that incremented value not first one. from that incremented value it decrements.
const n = --d

console.log(m , n);


// Practice Question for Post-Increment & Decrement as well as for Pre-Increment & Decrement

let pracQuestion = a + b + ++a - b++ + --a + a++ - b-- + ++b ; // 41 answer

let pracAnswer = 10 + 11 + 11 - 11 + 10 + 10 - 12 + 12; // 41 answer

// let mistakeAnswer = 10 + 11 + 11 - 11 + 10 + 10 - 10 + 11; // 42 answer

console.log(pracQuestion);
console.log(pracAnswer);

