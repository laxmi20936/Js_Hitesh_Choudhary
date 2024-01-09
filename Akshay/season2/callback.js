
// HOF are functions which takes another function as an arg or 
//    returns function from it
// ==================================================================
// Callback Function
// callback function are functions which is passed as an argument into another function
// Callback function are super powerful way  of handling async operation in Js.
// async programming exists because callback exists.
// =======================================================================
// Good part of callback: Async programming
// Bad part of callback: Callback hell and Inversion of Control
// ==============================================================================
// Callback Hell: Code grows horizontally.(One callback inside another callback) 
// Structure looks like pyramid of DOOM.
// Unreadable and unmaintainable.
// ===========================================================================
// Inversion Of Control: When we pass one callback inside another callback we lose 
// control of our code. 
// Here we are giving our cb fn to createOrderApi that createOrder will execute our
// cb fn which is very risky.
// How risky: Because createOrderApi would never call our cb fn or
// may call our cb fn twice.
// =================================================================================
// var a= 188
// function x(){
//     var a = 90
//     console.log(a, "Inside fn");
// }
// x()
// console.log(a);
// ================================================================================
// createOrder()  => orderID
// proceedToPayment()
// orderSummary()
// updateWallet()

const cart = ["kurta","pant","shirt"]

createOrder(cart, function(){
    proceedToPayment(orderID, function(){
        orderSummary(function(){
            updatePayment()
        })
    })
})
