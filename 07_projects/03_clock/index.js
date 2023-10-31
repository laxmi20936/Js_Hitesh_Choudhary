const clockContainer = document.querySelector('.clk-container')
// console.log(btn);
const inc = clockContainer.querySelector('.inc')
const dec = clockContainer.querySelector('.dec')
const reset = clockContainer.querySelector('.reset')
// console.log(inc);

inc.addEventListener('click',function(){
    const h3 = clockContainer.querySelector('h3')
    h3.innerHTML = parseInt(h3.innerText) + 1       
})

dec.addEventListener('click', function(){
    const h3 = clockContainer.querySelector('h3')
    h3.innerHTML = parseInt(h3.innerText) - 1
})

reset.addEventListener('click', function(){
    const h3 = clockContainer.querySelector('h3')
    h3.innerHTML = 0
})

// ======================CLOCK============
const clock = document.querySelector('.clk-container1')
// console.log(clock);
const button = clock.querySelector('button')
// console.log(button);

button.addEventListener('click',function(){
    // console.log("hi");
    const time = new Date()
    const h3 = clock.querySelector('h3')
    console.log(time.toLocaleString().split(',')[1]);
    h3.innerHTML = time.toLocaleString().split(',')[1]
    
})


