const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

const a = marvel_heros.concat(dc_heros,1,2);
// console.log(a);
// console.log(marvel_heros);
// console.log(dc_heros);

const add = [...dc_heros,...marvel_heros]
// console.log(add);
// console.log(marvel_heros);
// console.log(dc_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// console.log(another_array);

const om = Array.isArray(13525)
// console.log(om);
 
//  string to array ===> split and from method
const aa = "my name is"
// console.log(aa.split());
// console.log(Array.from(aa));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:'hitesh'}));

let score1 = 100
let score2 = 200
let score3 = 300
const abc1= []
console.log(abc1);
abc1.push(score1,score2,score3)
console.log(abc1);

const akk = Array.of(score1, score2,"null")
console.log(akk);