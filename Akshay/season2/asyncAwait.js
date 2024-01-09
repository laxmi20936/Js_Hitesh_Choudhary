//                Async await
// Difference between a normal function and async function.
// When we write async keyword in front of the function that becomes a async func.
// Async function will always return a Promise. 

// What if a async function return a string or number or boolean?
// In that case this value will be wrapped inside a Promise.
// If its already a Promise which is returned then it won't be again wrapped inside promise.


// const p = new Promise(function (resolve,reject) {
//    resolve("ok")
// })
// async function getData(){
//     return p
// }
// const data = getData()
// console.log(data);
// ===============================================================================

// Await keyword
// await keyword along with async function is used to handle promise.
// await is not written alone . Await is always used inside  async function.
// await keyword is written in front of promise. Await promise will resolve the promise

// const p1 = new Promise(function (resolve,reject) {
//        setTimeout(() => {
//         resolve("Namaste Javascript")
//        }, 20000);
// })

// const p2 = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//      resolve("Namaste Javascript")
//     }, 50000);
// })

// async function getData(){
//     console.log("kkk");
//  When Js encounters await keyword getData func suspend its excution and will move
// out of the call stack.When the promise is resolved then again getData func comes inside
// the callstack and start the executed from where it left earlier.
//     const data = await p1
//     console.log("ok");
//     console.log(data);

//     const data2 = await p2
//     console.log("ok");
//     console.log(data2);
// }
// getData()
 
// function normalFunc() {
//    p.then(x=> console.log(x)) 
//    console.log("bye");
// }
// normalFunc()

// ==========================================================
const url ="https://randipkkl"
async function abc() {
    console.log("g");
    try{
        // await will wait for the promise to resolve(the promise will either be fulfullied/rejected)
        console.log("k");
        const data = await fetch(url)
        console.log(data);
        const jsonValue = await data.json()
        console.log(jsonValue);
    }catch(err){
        console.log(err);
    }
}

abc()

// const p1 = new Promise(function (resolve, reject) {
//      setTimeout(() => {
//         reject(1)
//      }, 100);
// })
console.log("lllll");