// strings in JS
// Some Methods of Strings in JS

let myName = "Moeen"

// first method is .length method

console.log(myName.length); // 5

// "includes" check whether a string contain that particular character(s) which you have given or not if that exist than true otherwise false.
console.log(myName.includes("een"));

// same as above, "startwith" check whether that string starts with that particular characters you have given or not.
console.log(myName.startsWith("Mo"));

// ""endswith" check that particular character(s) you have given, the string is ending with them or not.
console.log(myName.endsWith("en"));


// "indexof" check the position of the given character and results as the number of that position at which the given character lies. tells the count from where that characters are starting in the string 
console.log(myName.indexOf("e")); //starting with e and its count is 2 in the string

//some more methods

let myString = new String("Moeenfc");
console.log(myString);

// "Anchor", in this method the value u pass as a parameter of anchor is replaced with the attribute ("name") of anchor tag in HTML and this anchor now has value of the given value at JS anchor method. 
console.log(myString.anchor("Moeen"));

// "AT", in this, by passing a parameter in number acc to the length of the string, it returns an output of that character which is at that particular position which you pass as a parameter. 
console.log(myString.at(1));
console.log(myString.at(-1)); //it'll count from backward and returns the value of that particular position which you pass.

console.log(myString.at(-8)); // if the parameter that was passed is greater then the length of that string, so it will return an output UNDEFINED.

console.log(myString.big()); // this will returns an output of the "Big tag" in which the value of the variable will be placed.

console.log(myString.blink()); // this will also returns an output of the "Blink tag" in which the value of the variable will be placed.

