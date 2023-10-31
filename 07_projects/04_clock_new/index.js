console.log("laxmi good");
const clock = document.querySelector("#clock")

// const date = new Date();
// const time = date.toLocaleDateString()

// clock.innerHTML = time

setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString()
    clock.innerHTML = time
}, 1000);
