//  Promises are used to handle async operation in js

 const cart = ['shoes',"kurta", "pant"]

// createOrderAPI(cart) => return orderID
// proceedToPaymentAPI(orderID)

// createOrder(cart,function(){
//     proceedToPayment(orderID)
// })

// using callback is not a confident way of writing code 

                    //  Promises
// const promise = createOrder(cart)
// createOrderAPI will return us promise which will be an empty obj with data property 
// as undefined and after some time this promise obj will be filled with data.

// {data: undefined}
// {data: orderDetails}  ===> after some time
// =================================================================================
// promise.then(function(orderID){
//     proceedToPayment(orderID)
// })

// Here we are attaching the callback function to the promise object.The cb fn will be 
// executed only when the promise object will be filled with data. This callback fn 
// will be executed only once .This will give alot of trust in our transaction.
// Promise objects are immutable and can be passed anywhere.

// In callback hell we  were passing(not attaching) cb fn and losing the control 
// of our code and the callback fn may not be called or called twice.

// ==========================================================================
const gitHub = 'https://api.github.com/users/akshaymarch7'

const user = fetch(gitHub)
console.log(user);
user.then(function(res){
   console.log(res.json())
}).then(function(data){
      console.log(data);
}

)

// {
//     Prototype: 'Promise',
//     PromiseState: 'pending',
//     PromiseResult: undefined
// }

// ================Later when the response comes===============================================
// {
//     Prototype: 'Promise',
//     PromiseState: 'fulfilled',
//     PromiseResult: Response
// }

// What is promise?
// Promise is an obj that represents eventually completion or failure of async operation

                      // Advantages of using  promise?
// Before promises we used to depend on callback fn which has issues
// 1)callback hell => overcome(promise chaining)
// 2)inversion of control =>promise obj ko we attach cb function 
// Inversion of control is overcome by promises. 
// Promise has 3 states: Pending, fulfilled, rejected. As soon as the promise obj
// is fulfilled or rejected , the promise obj is immediately updated with PromiseState
// and PromiseResult which is in pending state and the result is undefined.
// And when the promise obj is filled with data, using .then() method we can 
// attach a callback function to the promise object.
// To avoid callback hell we use promise chaning. This way our code will expand vertical
// instead of horizontal.
// A very common mistake that developers do is not returning a value during chaining
// of promises. Always remember to return a value. 
// This returned value will be used by the next .then()
// Promise resolves only once  and the obj is immutable.


const promise=createOrder(cart);

promise.then(function(orderId){
    return proceedToPayment(orderId)
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
}).then(function(paymentInfo){
        updateWalletBalance(paymentInfo)
})

// ==============================================
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo =>  showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo))


    // [3:28 PM] Ganesan Ramachandran
    // Will the below code return any error? If yes, identify the error.
    // function fetchData(callback) {
    //   fetch('https://api.example.com/data')
    //     .then(response => response.json())
    //     .then(data => callback(null, data))
    //     .catch(error => callback(error));
    // }
    //  fetchData(function (error, data) {
    //   if (error) {
    //     console.log('Error:', error);
    //   } else {
    //     console.log('Data:', data);
    //   }
    // });
     
    // [3:31 PM] Ganesan Ramachandran
    // const testArray = [1, 2, 3]; testArray = [4, 5, 6]; console.log(testArray);
    // [3:32 PM] Ganesan Ramachandran
    const fetchData = async () => {   
        const response = await fetch("https://api.samplewebsite.com/data");   
        const data = await response.json();   
        console.log(data); 
    }; 
    fetchData();
