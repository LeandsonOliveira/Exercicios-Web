console.log(soma(3, 4))   //antes
//console.log(sub(3, 4))  //So depois

//Function declaration
function soma(x, y){
    return x + y
}

//Function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))