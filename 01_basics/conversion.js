const sat = "        "
const string_number = Number(sat)
// console.log(string_number);
// console.log(typeof string_number);


// "33"  => 33
// "33abc"  => NaN
// "" or " " => 0
// null => 0
// undefined => NaN

// -------------------------------------------------

const data = "     "
const boolean_data = Boolean(data) 
// console.log(data.length);
// console.log(boolean_data)
// console.log(typeof boolean_data)

// 0 => false
// -0.1 => true
// 123 => true
// "" => false
// "   " => true
// "hhh" => true
// null => false
// undefined => false

// -----------------------------------------------------------
const data1 = undefined
const to_string = String(data1);
// console.log(to_string);
// console.log(typeof to_string);

// 123 => "123"
// 0 => "0"
// -0.1 => "-0.1"
// true => "true"
// null => "null"
// undefined => "undefined"


// ---------------------------Operations----------------------------

const data11 = "2" + 3 + 3      //233
// const data11 = 2 + 3 + "3"   //53
// const data11 = 2 + "" + 2    //22
// const data11 = 2 + " " + 2   //2 2
// const data11 = +""           //0
// const data11 = +true         //1
console.log(data11)
console.log(typeof data11)

let n1,n2,n3;
n1 = n2 = n3 = 3 + 2
console.table([n1,n2,n3])