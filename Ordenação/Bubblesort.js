function bubblesort(vetor){
    for(let i=0; i<vetor.length - 1; i++){
        for(let j=0; j<vetor.length -i -1; j++){
            if (vetor[j] > vetor[j+1]){
                let aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
}

let num = [12, 22, 34, 1, 77, 53, 54, 2, 98];

console.log(num);
bubblesort(num);
console.log(num);
