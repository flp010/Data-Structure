//DANIEL FELIPE DE SOUSA RODRIGUES 
//LEONARDO ABELO DE BARROS
function josephusVet(m) {
    let pessoas = [];
    for (let i = 1; i <= 10; i++) {
        pessoas.push(Math.floor(Math.random() * 11))
    }
    console.log("", pessoas)

    let indice = 0;
    while (pessoas.length > 1) {
        indice = (indice + m - 1) % pessoas.length;
        console.log('Removendo:', pessoas[indice]);
        pessoas.splice(indice, 1);
        console.log("", pessoas)
    }

    return pessoas[0];
}
let n 
let m = 3; 

console.time("Tempo de execução")
console.log('Sobrevivente:', josephusVet(n, m));
console.timeEnd("Tempo de execução")
