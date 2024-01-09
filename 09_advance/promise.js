const promiseOne = new Promise(function(resolve, reject){
    // /Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Laxmi");
        resolve();
    },1000)
})
// console.log(promiseOne)
promiseOne.then(function(){
    console.log("P1 resolved");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("In P2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("P2 resolved");
})

const promiseThree = new Promise((resolve, reject)=>{
     setTimeout(()=>{
        console.log("In P3");
        resolve({username:"laxmi", email:"dsagf@gmail.com"})
     }, 5000)
})
// console.log(promiseThree);
promiseThree.then((data)=>{
    console.log(data);
    return data.email
}).then(x=> console.log(x)).catch(x => console.error(x))

const promiseFour = new Promise((resolve, reject)=>{
    const err = false;
    setTimeout(function(){
        if(!err){
            resolve("resolved 4444")
        }else{
            reject("rejected 44444")
        }
    }, 2000)
})

promiseFour.then(x => console.log(x))
.catch(x => console.log(x))

const five = new Promise(function(resolve,reject){
    let err = true
    setTimeout(function(){
    if(!err){
        resolve("Resolve in four")
    }else{
        reject("Error in five55555ye")
    }
    },1000)
})

// console.log(five);

async function getData(){
    try{
        const db = await five
        console.log(db)
    }catch (eee){
          console.log(eee);
    }
    
}

getData()

async function getData1(){
    console.log("hi")
    const pr = await fetch("https://api.github.com/users/akshaymarch7");
    console.log("bue");
    console.log(pr);
    // console.log(pr.json());  //promise
    const data = await pr.json()
    console.log(data);
}
getData1()
