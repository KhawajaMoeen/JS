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
console.log(myString.length);


// "Anchor", in this method the value u pass as a parameter of anchor is replaced with the attribute ("name") of anchor tag in HTML and this anchor now has value of the given value at JS anchor method. 
console.log(myString.anchor("Moeen"));

// "AT", in this, by passing a parameter in number acc to the length of the string, it returns an output of that character which is at that particular position which you pass as a parameter. 
console.log(myString.at(1));
console.log(myString.at(-1)); //it'll count from backward and returns the value of that particular position which you pass.

console.log(myString.at(-8)); // if the parameter that was passed is greater then the length of that string, so it will return an output UNDEFINED.

console.log(myString.big()); // this will returns an output of the "Big tag" in which the value of the variable will be placed.

console.log(myString.blink()); // this will also returns an output of the "Blink tag" in which the value of the variable will be placed.

console.log(myString.bold()); // this will also returns an output of the "Bold tag" in which the value of the variable will be placed.

console.log(myString.charAt(0)); // in this we will give a number acc to length of the string as a parameter and this method returns the output of the character that is placed at the given number as a parameter.  

console.log(myString.charCodeAt(1)); // this will give an integer number on the basis of unicode point range

// this will first that unicode as charcodeat and then .tostring that value of codepointat to hexadecimal
console.log(myString.codePointAt(1));
console.log(myString.codePointAt(1).toString(16));

console.log(myString.concat(` by ${myName}`)); // concat simply combine value you will give with the string.

let newString = String("ReactJs")
console.log(`${newString} and type of ${newString} is ${typeof newString}`);

console.log(myString.fixed()); // this will return a tag <tt></tt> with the value of the string which you have used in your JS code.

console.log(myString.fontcolor("red")); // this will return a tag of "font" with the attribute "color" and its value is the parameter you have given in the method.

console.log(myString.fontsize(5)); // this will returns the tag of "font" with the attribute "size" and its value of string is parameter you have given in the method.

console.log(myString.isWellFormed()); // this will pass true or false, it checks the string is in suggorate form or not.

console.log(myString.italics()); // its returns the tag of "italic" with value of variable's value in JS.

console.log(myString.lastIndexOf("f"));

console.log(myString.link("https://mygit.com")); // returns anchor tag with the value of string  in JS and with attribute value of href, the parameter yiu passes in the link method.
  


