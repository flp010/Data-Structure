function limpa(fila){
    while(fila.length != 0){
        fila.shift()
    }
}
var fila = []
var x, y 

y = 7
fila.push(y)
fila.push(1)
fila.push(2)

console.log("Fila: " + fila)

x = fila.shift()
console.log("Elemento:" + x)
console.log("Fila:" + fila)

fila.push(10)
console.log(fila)

limpa(fila)
console.log("Fila:" + fila)
