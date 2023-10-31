// Singleton objects (using constructor)
const obj = new Object()
// console.log(obj)
// Ex: Object.create, Object.assign

// ======================================================

// object literals
const data = Symbol("key")
const JsUser = {
    name:"Histesh",
    "full name":"xyx",
    age:18,
    isLoggedIn:false,
    email:"hitesh@google.com",
    lastLoginDate : ["Mon","Sun"],
    123:"Numberee",
    [data]:"myKEY1"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[123]);
// console.log(JsUser["123"]);
// console.log(JsUser[data]);
// console.log(JsUser[data]);



// JsUser.email ="xyz"
// Object.freeze(JsUser)
// JsUser.email ="xyz1"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("PPPPPP");
}
JsUser.greetingTwo = function(){
    console.log(`My name is ${this.name} and email ${this.email}`)
}
JsUser.greetingTwo()

