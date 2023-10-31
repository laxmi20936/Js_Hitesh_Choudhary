// iife will not pollute the global space. 
// ex: If we have variable in global space then it will consume 
// memory but if we declare variable in any func then after the function 
// completes its execution it will free up the memory of that variable.

let abc = "besttt";

(function chai(){
    console.log(abc)
    var abc = "conn1"
    console.log(abc, "end")
})();

console.log(abc, "OUT");
// chai()
// console.log(abc)

(function aaa(name){
 console.log(name)
})("opop")