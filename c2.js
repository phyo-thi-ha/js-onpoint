// function twice(num,fun){
//     let result = fun(num)
//     console.log( result * 2)
// }
let twice = (n,f)=>f(n)*2
result = twice(5,function(x){
    return x * x
})

console.log(result)