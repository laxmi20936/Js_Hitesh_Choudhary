const cart = ['shoes', 'kurta', 'pant']
 
                 // Consumer or creating our own promise
const promise = createOrder(cart)
console.log(promise);
// {
    //   Prototype: Promise,
    //   PromiseState: 'fulfilled',
    //   PromiseResult: '12345'
// }
promise.then(function(orderId){
        // proceedToPayment(orderId)
        console.log(orderId);
        return orderId
}).catch(x => console.log(x))
.then(function(orderId){
    return proceedToPayment(orderId)
    // console.log(proceedToPayment(orderId))
}).then((paymentMsg) => console.log(paymentMsg))
.then(function(){
       return showOrderSummary("aabbcc")
}).then((msg) => {
    console.log(msg)
    return msg.data1
})
.then(x =>  updateWallet(x))
.then(x => console.log(x))
.catch(function(err){
      console.error(err.message);
})

// Producer
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("Cart is not valid")
            console.log(err);
            reject(err)
        }

        const orderId ='12345'
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
        }
    })

    return pr
}

function validateCart(){
    return false
}

function proceedToPayment(pay){
    return new Promise(function(resolve, reject){
        const er = new Error("Err in payment")
        resolve("payment success")
    })
}
function showOrderSummary(data){
    return new Promise(function(resolve, reject){
        const er = new Error("Err in show order summary")
        // reject(er)
        resolve({data:"order sun", data1: data})
    })
}

function updateWallet(x){
    return new Promise(function(resolve, reject){
        // const er = new Error("Err in show order summary")
        // reject(er)
        resolve("Wallet updated" + x)
    })
}