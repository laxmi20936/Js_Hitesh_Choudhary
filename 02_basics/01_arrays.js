const myArr =[0,1,2,33,4]
const myHeros = ["shaktiman", "naagraj"]
// console.log(myHeros);

const str = new String("ppp")
const Arr2 = new Array(11,22)
const obj = new Object({name:"lll", age: 12344, city:"mum"})

// console.log(str.indexOf('k'));
// console.log(Arr2);
// console.log(obj.city);

// myArr.push(6)
// myArr.pop()
// myArr.unshift(333)
// myArr.shift()
// console.log(myArr);


// array me hai ya nahi

const present = myArr.includes(3)
// console.log(present);
const present1 = myArr.indexOf(33)
// console.log(present1);

//  String to array ===> split
const om = "mera naam laxmi"
const om1 = om.split("/")
// console.log(om1);

// Array to string ==> join
const prabhu = [1,22,333]
const prabhu1 = prabhu.join('+')
// console.log(prabhu);
// console.log(prabhu1);


// Difference in slice and splice

// SLICE: (returns new array but will not modify original array)
// SPLICE: (returns new array but will also modify original array)

const myAr =[0,1,2,3,4,5]
// const myAr1 = myAr.slice(3,5)   // last not included 
const myAr1 = myAr.slice(-3,4)
// console.log(myAr);
// console.log(myAr1);

                                //  SPLICE
const myAr2 = myAr.splice(1,3)
// console.log(myAr);
// console.log(myAr2);
