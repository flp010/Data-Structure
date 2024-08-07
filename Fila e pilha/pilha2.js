function clear(pilha){
    while (pilha.length != 0){
        pilha.pop()
    }
}
function topo(pilha){
    x = -1
    if (pilha.length != 0){
        x = pilha.pop()
        pilha.push(x)
    }
    return x
}

var pilha = []
var x

x = parseInt(prompt("Informe um número:"))
pilha.push(x)
pilha.push(1)
pilha.push(2)

console.log("Pilha" + pilha)

x = pilha.pop()

console.log("Elemento: " + x)
console.log("Pilha: " + pilha)

x = topo(pilha)
console.log("Topo: " + x)
console.log("Pilha: " + pilha)

clear(pilha)
console.log("Pilha:" + pilha)


