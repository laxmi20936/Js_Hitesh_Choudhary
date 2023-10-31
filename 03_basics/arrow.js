// NOTE: this keyword refers to the current context

const user = {
    username: "hitesh",
    age: 29,
    welcome: function(){
        console.log(this.username + this.age)
    }
}



// user.welcome()
// console.log(this);// browser me global object and in node it is empty obj

// var username11 = "lll"
function abc(){
    var username11 = "hiteshaaa"
    console.log(this)
    console.log(this.username11)
}

// abc()

const chai = function () {
    var username = "hitesh"
    console.log('AA',this);
}

// chai()

const chai1 =  () => {
    var username = "hitesh"
    console.log("ll",this);
}

chai1()

// const addTwo2 = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo2(2,3))

// var addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


