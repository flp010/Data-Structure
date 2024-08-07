function InserirElementos(vetor){
    for(let i=0;i<4;i++){
        let objeto = {
            entrada:(parseInt(prompt("Entre com um número")))
           }
           vetor.push(objeto);
           console.log("Dado inserido");
         }
}
function SomaElemento(vetor){
    do{
        let n1=(parseInt(prompt("Escreva um valor")));
    if(n1 != vetor[i].entrada){
        console.log("Não há este valor no vetor, digite novamente")
    }
    }while(n1 != vetor[i].entrada)
    do{
        let n2=(parseInt(prompt("Escreva uma valor")));
        if(n2 != vetor[i].entrada){
            console.log("Não há este valor no vetor, digite novamente")
        }     
    }while (n2 != vetor[i].entrada)
    let soma = 0;
    let soma2 = 0;
    for(let i=0;i<vetor.length;i++){
        if(vetor[i].entrada === n1 ){
            soma = vetor[i].entrada
        }
        if(vetor[i].entrada === n2){
            soma2 = vetor[i].entrada
        }
    }
    let calculo = soma + soma2
    console.log(calculo)
}
function SomarPosicao(vetor){
    let p = (parseInt(prompt("Digite uma posição")))
    let p2 = (parseInt(prompt("Digite outra posição")))
    if(p < vetor[i].entrada && p > vetor[i].entrada){
        console.log("Posição inválida")
    }
    if (p2 < vetor[i].entrada && p2> vetor[i].entrada){
        comsole.log("Posição invalida")
    }
    else{
        let resultado = vetor[p].entrada + vetor[p2].entrada
    console.log(resultado)
    } 
}
function SomaPares(vetor){
let soma3 = 0
for (let i=0;i<vetor.length;i++){
    if (vetor[i].entrada % 2 === 0){
        soma3 += vetor[i].entrada
    }
}
console.log(soma3)
}
function SomaImpares(vetor){
let soma4 = 0 
for (let i=0;i<vetor.length;i++){
    if (vetor[i].entrada % 2 ===1){
        soma4 += vetor[i].entrada
    }
}
console.log(soma4)
}

function principal() {
    let vetor = []
    do {
        opcao = Number(prompt(`Informe a opção escolhida \n 1. Inserir elementos \n 2. Somar elemento\n 3. Somar elemento Posição\n 4. Somar pares \n 5. Somar impares \n 6. Sair`))
        switch (opcao) {
            case 1:
                InserirElementos(vetor);
                break;
            case 2:
                SomaElemento(vetor);
                break;
            case 3:
                SomarPosicao(vetor);
                break;
            case 4:
                SomaPares(vetor);
                break;
            case 5:
                 SomaImpares(vetor);
                 break;
            case 6:
                alert(`Programa será encerrado`);
                break;
            default: alert(`Opção inválida!!!`)
        }
    }
    while (opcao != 4)
}
principal()
