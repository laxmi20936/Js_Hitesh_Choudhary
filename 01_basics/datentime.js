let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString().slice(0,10));
// console.log(myDate.toLocaleString().split(',')[1].trimStart())

// let  createdDate = new Date(2024,1,22)
// console.log(createdDate.toString());

// let createdDate = new Date(2023,3,30,5,4,1)
// console.log(createdDate.toString());

// let createdDate = new Date("2023/11/1")
// let createdDate = new Date("2023-11-1")
let createdDate = new Date("12/2/2024")

// console.log(createdDate.toString());
// console.log(createdDate.getMonth());
// console.log(createdDate.getDate());
// console.log(createdDate.getMinutes());
// console.log(createdDate.getTime());

// let dd = Date.now()
// console.log(Math.floor(dd/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.toLocaleString('default',{
    weekday:'long'
}));
console.log(newDate.toLocaleString("en-US"));
console.log(newDate.toLocaleString("en-GB"));
console.log(newDate.toLocaleString("en-US", {timeZone: "America/New_York"}));