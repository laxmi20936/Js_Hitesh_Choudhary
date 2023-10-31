const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){
    // console.log(key + " and " + myObj[key]);
} 

const programming = ["js", "rb", "py", "java", "cpp"]

for(const p in programming){
    // console.log(p);
}

const str = "Laxmi Waghmore"
for(const s in str){
    // console.log(s);
}

const map = new Map();
map.set("INI", "INDIA")
console.log(map);
// for(const a of map){
//     console.log(a);
// }