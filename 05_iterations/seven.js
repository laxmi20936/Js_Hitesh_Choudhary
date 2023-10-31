const sum = [1,2,3]

const arr  = sum.reduce((acc, curr) => {
    console.log(acc, curr,"ll")
    return (acc + curr)
})

console.log(arr)