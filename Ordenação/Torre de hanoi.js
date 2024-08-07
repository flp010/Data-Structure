function hanoi(A,B,C, n){
    var menor = n - n + 1
    if (C == C[n, n-1, n-2])
        return ("Torre de hanoi resolvida")
 
}
function torreHanoi(n, origem, destino, auxiliar) {
    if (n == 1) {
        console.log("Mova o disco de", origem, "para", destino);
        return;
    }

    torreHanoi(n - 1, origem, auxiliar, destino);
    console.log("Mova o disco de", origem, "para", destino);
    torreHanoi(n - 1, auxiliar, destino, origem);
}
// Exemplo de uso:
let n = 3; // Número de discos
torreHanoi(n, 'A', 'C', 'B');

