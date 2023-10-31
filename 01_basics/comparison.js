const a = 1;

// console.log(a);

// console.log(02 === 2)
// console.log("02" > 2)
// console.log("02" > 1)

// NOTE: Comparison check( >,<, <= , >=) works different from equality check(== , ===)
// In comparison null or undefined is converted into number and then checked.

console.log(null > 0);  // 0 > 0
console.log(null == 0); // empty == 0
console.log(null >=0); // 0 >= 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// avoid using the above comparion or checks...focus more on business logic