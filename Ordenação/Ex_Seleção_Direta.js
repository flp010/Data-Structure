let vetor = [12,74,3,45,2,96,65,1,0];
for (let i=0;i<vetor.length;i++){
    for (let j=i+1;j<vetor.length;j++){
        let menor = vetor[i]
        if (vetor[j]< menor){
            vetor[j] = menor
        }
        let temp = vetor[j]
        vetor[j] = menor
        vetor[i] = temp
    }  
}
console.log(vetor ,menor)

