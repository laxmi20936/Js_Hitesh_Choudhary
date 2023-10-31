function myName(){
    console.log("laxmi");
}

// console.log(myName())

function addTwoNum(n1,n2){
    console.log(n2)
    console.log(n1+n2)
}

// addTwoNum(3,null)

// 3 + 3 =6
// 3 + "3" = 33
// 3 + true =4
// 3 + false = 3
// 3 + undefined = NaN
// 3 + null = 3+0 =3

function add(n1,n2){
   const a = n1+n2
   return a
}
// console.log(xyz)
// console.log(add(3,900))
// console.log(xyz);

function loginUserMessage(name){
    if(name === undefined ){
     console.log("Please enter name")
     return 
    }
    return (`${name} logged in`)
}

// console.log(loginUserMessage('p'))

function cal(...nums){       // rest operator
    console.log(nums)
}
// cal(1,2,3,7,9,9)

const user ={
    name: "hitesh",
    prices:199
}

function handleObj(obj1){
   console.log(`Name is ${obj1.name} and prices ${obj1.prices}`);
}

// handleObj({
//     name:"ok",
//     prices:2000,  
// })

const newArr = [10,20,30,40]

function array(arr){
  console.log(arr[4])
}
array([1,2,3,4,5])

// -----------------------------------
const xyz = 134
const obj ={
    name: xyz,
    age:xyz
}

// console.log(obj)