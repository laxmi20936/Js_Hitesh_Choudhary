const obj = new Object()
// console.log(obj);


const tinder = {}
tinder.name="laxmi"
tinder.age=27
tinder.id=111

const regularUser = {
    email:"reguser@gmail.com",
    fullName:{
        name:"xyz",
        age:28,
        address:{
            city:"Mumbai",
            state:"Maharashtra"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.email)
// console.log(regularUser['fullName'])
// console.log(regularUser.fullName.address.state)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const xyz = {obj1,obj2}
// console.log(xyz)

// const abc = Object.assign(obj1,obj2,obj4)
// const abc = Object.assign({},obj1,obj2,obj4)
// console.log(abc);
// console.log(obj2);
// console.log(obj1);
// console.log(abc===obj1)

// obj1[1]="ppppp"
// console.log(abc)
// console.log(obj1)
// console.log(obj2)

const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const newobj = obj3;
newobj.data = "om"
// console.log(newobj)
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[0])

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor,price:ppp} = course
// console.log(courseInstructor)
console.log(ppp)
// console.log(price)
console.log(course);