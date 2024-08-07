function VerificarExpre(expressão) {
    let pilha = [];
    let exemplos = {
        '(': ')','[': ']','{': '}'
    };

    for (let caracter of expressão) {
        if (caracter == '(' || caracter == '[' || caracter == '{') {
            pilha.push(caracter);
        } else if (caracter == ')' || caracter == ']' || caracter == '}') {
            if (pilha.length == 0 || exemplos[pilha.pop()] !== caracter) {
                return false;
            }
        }
    }

    return pilha.length == 0;
}

let expressao1 = "[(2 + 3) / [5 - 1])";
let expressao2 = "([4 * 5])";
let expressao3 = "{(4 * 5]}";

if (VerificarExpre(expressao1)) {
    console.log("Expressão correta");
} else {
    console.log("Expressão incorreta");
}

if (VerificarExpre(expressao2)) {
    console.log("Expressão correta");
} else {
    console.log("Expressão incorreta");
}

if (VerificarExpre(expressao3)) {
    console.log("Expressão correta");
} else {
    console.log("Expressão incorreta");
}
