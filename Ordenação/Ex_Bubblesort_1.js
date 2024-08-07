//bubblesort 
let vetor = [100, 75, 16, 23, 292, 10, 2,53,67,89,99];
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
        for(let i=0;i<vetor.length;i++){
            if (vetor[i] < vetor[i++]){
                vetor[i] = vetor[i++]
                vetor[i++] = vetor[i]     
            }
        }

console.log(vetor, menor, maior);