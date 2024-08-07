var pilha = [];
var aux = " ";
pilha.push("(");
pilha.push(")");
console.log(" " + pilha);
aux = " "
while (pilha != null) {
    for (let i = 0; i < pilha.length; i++) {
        aux = pilha.pop()
        console.log(aux)
        if (pilha != aux) {
            console.log("Expressão correta");
        }
    }
}

