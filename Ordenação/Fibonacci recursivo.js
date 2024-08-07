function fatorial (num){
    if (num ==0){
        return 1
    }
    else {
        return (num * fatorial (num - 1))
    }
}

var result = fatorial(8)
console.log(result)

function fibonacci (num){
    if ((num == 1) || (num == 2)){
        return 1
    }
    else{
        return (fibonacci(num -1)) + (fibonacci(num -2))
    }
}
var result = fibonacci(7)
console.log(result)

function potencia (base, exp){
    if (exp == 0){
        return 1
    }
    else {
        return (base * potencia (base, exp -1))
    }
}
var result = potencia(5,4)
console.log(result)