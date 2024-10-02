// Objects
// Methods:

// 1. Singleton Method
// 2. Object Literals

// Object Literals


let myBio = {
    myName : "Khawaja M. Moeen",
    myAge : 21,
    city : "Karachi",
    studies : "BSSE",
    contactNumber : "+92312*******",
    jobPosition : "Teacher",
    martialStatus : "Single"
}

// console.log(myBio.myName);

// myBio["myName"] =  "M. Moeen"
// console.log(myBio["myName"]);

myBio["email"] = "moeen@gmail.com"
// console.log(myBio);

// Singleton Method to write Object

const userInfo = new Object()

userInfo.userName = "ali"
userInfo.userId = 101234
userInfo.userEmail = "user@gmail.com"
userInfo.isLoggedIn = true

// console.log(userInfo);
// console.log(userInfo.hasOwnProperty("isLoggedIn"));

// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));
// console.log(Object.enteries(userInfo));



