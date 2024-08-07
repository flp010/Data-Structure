//BUBBLESORT
let vetor = [];
for (let i=0;i<5;i++){
    vetor[i] = parseInt(prompt("Entre com os dados do vetor"))
}
console.log(vetor)
let menor = vetor[0]
let maior = vetor[0]
for (let i=0;i<vetor.length;i++){
    if(vetor[i] <= menor){
        menor = vetor[i]
    }
    if (vetor[i] >= maior){
        maior = vetor[i]
    }
}
        for(let i=0;i<vetor.length - 1;i++){
            for(let j=0;j<vetor.length - 1 - i;j++){
                if (vetor[j] < vetor[j + 1]){  //COLOCAR < FAZ DO MAIOR PARA O MENOR COLOCAR > FAZ DO MAIOR PARA O MENOR
                    let temp = vetor[j]
                    vetor[j] = vetor[j+1]
                    vetor[j+1] = temp
                }

            }
        }

console.log(vetor,menor, maior);



