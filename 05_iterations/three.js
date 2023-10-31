// for of loop
const arr = [1,22,333,444]
for (const a of arr) {
    // console.log(a);
}


const str = "hello world!!"
for(let a of str){
    // console.log(a);
}

const obj = {
    name:"laxmi",
    age:26
}

// for(let aa of  obj){
    // console.log(obj[aa]);
// }
// const arr1 = [11,22]
// for(const a of arr1){
//     console.log(a);
// }

const abc = new Map()

abc.set("IN","INDIA")
abc.set("US","United states")
abc.set("FR","France")
abc.set("INa","INDIAAAA")

// console.log(abc.get("US"))
// console.log(abc);

// for(const [k,v] of abc){
    // console.log(k,v);
// }
for(const [k,v] in abc){
    console.log(k,v);
}

