const coding = ["js", "ruby", "java", "python", "cpp"]

coding.map(function (x, i, arr){
//   console.log(x,i,arr);
})

coding.forEach((x) => { 
    // console.log(x,"opp")
})

function dataEach(item){
//  console.log(item,"OM");
}

// coding.forEach(dataEach)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

console.log(myCoding.forEach(x => (x.languageFileName)))
