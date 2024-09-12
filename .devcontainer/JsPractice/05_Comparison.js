// Comparison in Datatypes

// number to number comparison ---> Basic

/* console.log(2 == 2); equal to ---> T
console.log(3>1); // Greater Than ---> T
console.log(4<3); // Less Than ---> F
console.log(3>=3); // Greater Than equal to ---> T
console.log(4<=1); // Less Than equal to ---> F */

// String to Number and vice cersa 
// This is not the correct way to comparison DT's
/*
console.log("3" == 2); // F
console.log("4" > 2); // T
console.log(5 < "6"); // T
console.log("4" >= 5); // F
console.log(5 <= "6"); // T
*/

// Null and Undefined  with Number Comparison

console.log(null == 0); // F, as null returns 0 (if we print it), and 0 is not equal to 0, bcz equal to operator works differently unless comparison operators(<,>)
console.log(null < 1); // T, as Null Returns 0, so simply 0 is less then 1.
console.log(null > 0); // F, like the above, 0 is not greater then 0
console.log(null >= 0); // T, as Null returns value 0, so 0 is equal to zero and here we have comparison operator (>=) so it'll return T

// same as for undefined but the output for undefined and number will always be false 

console.log(undefined == 0, undefined > 1, undefined <= 0); //answer will be F for all.

// so to avoide these mistake we use === sign it'll first detect the DT if DTs are same it'll compare, otherwise it will always return False.

console.log(2 === 2); // T, as both are of same DTs 

console.log("3" === 3); // F
console.log(undefined === 0); // F
console.log(true === 1); // F
console.log(null === 2); // F

