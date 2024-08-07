let frase = 'exercicio muito complicado'
let pilha = []
let letra
let i = 0
let fraseinvertida = ""
while (i < frase.length) {
    while (frase[i] != " " && i < frase.length) {
        pilha.push(frase[i])
        i++
    }
    while(pilha.length != 0){
        letra = pilha.pop()
        console.log(letra)
        fraseinvertida += letra
    }
    console.log(" ")
    fraseinvertida += " "
    i++
}
console.log(fraseinvertida)