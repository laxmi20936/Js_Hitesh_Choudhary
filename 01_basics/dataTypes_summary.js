// Two types: Primitive and Non-primitive(reference type)

// Primitive data SVGUnitTypes(7types):
// String, Number, boolean, null, undefined, bigint, Symbol(uniquely identifies value)


// Non-primitive (Reference type Datatypes):
// Array, Object functions

const str = "laxmi"
const num = 123
const isLoggedIn = true
const empty = null
let unu;
const bigNumber = 123456n
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(empty)
// console.log(typeof empty)

// console.log(unu);
// console.log(typeof unu);

// console.log(bigNumber);
// console.log(typeof bigNumber);

// console.log(id);
// console.log(anotherId);
// console.log(typeof anotherId);
// console.log(typeof anotherId);
// console.log(id == anotherId);
// console.log(id === anotherId);

// console.log(abc)
// console.log(typeof(abc) == unu)   //false
// console.log(typeof(abc) == typeof(unu))   //true

// ===================================================================================
const arr =[1,2,3]
// console.log(arr);
// console.log(typeof arr);  //object

const myObj ={
    name:'laxmi',
    age:27
}
// console.log(myObj);
// console.log(typeof myObj); //object

const myFunc = function(){
    console.log('hi')
}

// console.log(myFunc)
// console.log(typeof myFunc)  //object(function)

// =============================================================================
// Primitive uses (Stack Memory)
// Non-primitive uses (Heap Memory) --Reference type

const abc = "laxmi"
let xyz = abc;
xyz="om"
// console.log(abc);
// console.log(xyz);


const user1={
    name:"laxmi",
    email:"lllll"
}

const user2= user1;
user2.email="pppppo"

console.log(user1);
console.log(user2);