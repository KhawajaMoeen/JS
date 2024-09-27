// Array in JS

const fruits = ["mango", "apple", "banana", "grape", "orange"]
console.log(fruits);

// some methods of array
// push
// it adds the value that you will pass as a parameter, at the end in your array.

fruits.push("orange")
// console.log(fruits);

// pop
// it removes the last value from your array.
fruits.pop()
// console.log(fruits);

// unshift
// it will add a value at the start of your array which you pass as a parameter.

fruits.unshift("dates")
// console.log(fruits);

// shift
// it will remove the first value from your array.

let shiftFruits = fruits.shift()
// console.log(shiftFruits);
// console.log(fruits);

// slice
// for slice you have to create a new variable and store the operation in it, it will take numbers as parameters in it and returns the values from you array that are placed in that position numbers which you gave except the last, for eg. you pass parameters 0,3 so it will give output of value from 0-2 excluding value 3.

const someFruits = fruits.slice(0, 3)
// console.log(someFruits);  // [ 'mango', 'apple', 'banana' ]
// console.log("1. " ,fruits); // [ 'mango', 'apple', 'banana', 'grape', 'orange' ]


// splice 
// In splice there are three parameters, 1. starting point (index number), 2. delete count and 3. value you want to add
// we can add and remove values from an array by using splice

// fruits.splice(0, 2) [banana , grape , orange]
fruits.splice(2 , 2 , "peach" , "gauva") // ['mango', 'apple', 'peach', 'gauva' , 'orange']
console.log(fruits);



// join
// this will convert your array into strings 

const newFruits = fruits.join()
// console.log(newFruits);

// concat
// this will add anything you passes as parameters in it to your array.

const myFruits = fruits.concat("peach", "dates")
// console.log(myFruits);

// spread
// it will also add more than one array and returns an output in new variable.

const myNewFruits = ["pear", "peach", "dates"]
const allFruits = [...fruits, ...myNewFruits]

// console.log(allFruits);

// flat
// in this if there is arrays inside array then this will make those into one main array.

const myArr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [0, 2]], 3]
// console.log(myArr.flat(2));

