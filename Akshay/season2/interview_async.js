// Promise.race => It will return the result of first settled(succes/failure) promise.
// It will not wait for other promise to settle .
            
//               3, 2 ,1
// Promise.race([p1,p2,p3])  

// After 1s,p3 returns the first success = o/p: val3
// After 1s,p3 returns the first failure => o/p : val3
// ===============================================================================

// Promise.any => It will wait for the first promise to fulfill/ successful/ resolve.
// It will wait for the first settled- success/ resolve promise.
// Its a success seeking promise. 

//              3, 2 , 1 (x, v , x)
// Promise.any([p1,p2,p3])
// after 2s, it will return val2.

// If p1,p2,p3 all of them fails then we get Aggregate error after 3s. 
// List of all error. [err1, err2, err3]

// ============================================================================
// Promise.all will take an array of promise. (Fail fast)
// Success case: if all the promises are succes then it will return an array of result 
// after 3s
// Promise.all([p1,p2,p3]) 
// Success:[val1, val2,val3]

// Error/fail case: if any one promise fails then it will immmedialtely throw an error. 

//              3,2,1 (v,x,v)
// Promise.all([p1,p2,p3]) 
// After 2s, it will throw error(it will not wait for other promise). => err2

// ============================================================================
// Promise.allSettled will wait for all the promise to settle 
// Promise.allSettled ==> success case: ([p1,p2,p3])(3s,2s,1s)(v,v,v)
// Promise.allSettled ==> failure case: ([p1,p2,p3])(3s,2s,1s)(v,v,x)


// Promise.allSettled(all success): After 3s, returns an array with
//  all three values.([val1,val2,val3])

// Promise.allSettled(one fails): After 3s, returns an array with 
// all three values(it will wait till the end i.e other promise).([val1,val2, err3])
// ======================================================================
//  settled ==> got the result
// resolve x reject
// success x failure
// fulfilled x rejected

   
