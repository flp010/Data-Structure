//Daniel Felipe de Sousa Rodrigues
//Leonardo Abelo de Barros
function Criarvetor() {
    let vetor = []
    let opcao
    opcao = Number(prompt(`Informe a opção desejada : \n 1 - Criar vetor de 100. \n 2 - Criar vetor de 1000. \n 3 - Criar vetor de 10000.\n 4 - criar vetor de 100000`))
    while (opcao < 1 || opcao > 4) {
        if (opcao < 1 || opcao > 4) {
            console.log("Opção Invalida")
            opcao = Number(prompt(`Informe a opção desejada : \n 1 - Criar vetor de 100. \n 2 - Criar vetor de 1000. \n 3 - Criar vetor de 10000. \n 4 - criar vetor de 100000`))
        }
    }
    switch (opcao) {
        case 1:
            vetor = [];
            for (let i = 0; i < 100; i++) {
                vetor.push(Math.floor(Math.random() * 101)); 
            }
            console.log("Criando vetor de 100 (cem) elementos:")
            break;
        
        case 2:
            vetor = [];
            for (let i = 0; i < 1000; i++) {
                vetor.push(Math.floor(Math.random() * 1001));
            }
            console.log("Criando vetor de 1000 (mil) elementos:")
            break;
        case 3:
            vetor = [];
            for (let i = 0; i < 10000; i++) {
                vetor.push(Math.floor(Math.random() * 10001));
            }
            console.log("Criando vetor de 10000 (dez mil) elementos:")
            break;
        case 4:
            vetor = [];
            for (let i = 0; i < 100000; i++) {
                vetor.push(Math.floor(Math.random() * 100001));
            }
            console.log("Criando vetor de 100000 (cem mil) elementos:")
            break;
    }
    return vetor
}
function bubblesort(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}
function bubblesortcres(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] < vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}
function selecaoDireta(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
        }
    }
}
function selecaoDiretaCres(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] > vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
        }
    }
}
function insercaoDireta(vetor) {
    let carta;
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1
        carta = vetor[i];
        while (j >= 0 && carta < vetor[j]) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = carta
    }
}
function insercaoDiretaDecre(vetor) {
    let carta;
    for (let i = 1; i < vetor.length; i++) {
        let j = i - 1
        carta = vetor[i];
        while (j >= 0 && carta > vetor[j]) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = carta
    }
}
function quicksort(vetor, left, right) {
    var i = left
    var j = right
    var aux
    var pivotidx = Math.floor((left + right) / 2)
    var pivot = vetor[pivotidx]
    //partição
    while (i <= j) {
        while (parseInt(vetor[i]) < pivot)
            i++
        while (parseInt(vetor[j]) > pivot)
            j--

        if (i <= j) {
            aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
            i++
            j--
        }
    }
    if (left < j)
        quicksort(vetor, left, j)
    if (i < right)
        quicksort(vetor, i, right)
}
function quicksortDecrescente(vetor, left, right) {
    var i = left
    var j = right
    var aux
    var pivotidx = Math.floor((left + right) / 2)
    var pivot = vetor[pivotidx]
    //partição
    while (i <= j) {
        while (parseInt(vetor[i]) > pivot)
            i++
        while (parseInt(vetor[j]) < pivot)
            j--

        if (i <= j) {
            aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
            i++
            j--
        }
    }
    if (left < j)
        quicksortDecrescente(vetor, left, j)
    if (i < right)
        quicksortDecrescente(vetor, i, right)
}
let principal = () => {
    let vetor = Criarvetor()
    let vetor1 = vetor.slice()
    let vetor2 = vetor.slice()
    let vetor3 = vetor.slice()
    let vetor4 = vetor.slice()
    let vetor5 = vetor.slice()
    let vetor6 = vetor.slice()
    let vetor7 = vetor.slice()
    let vetor8 = vetor.slice()

    console.log("Vetor original", vetor)
    //BubbleSort
    console.time("BubbleSort tempo")
    bubblesort(vetor1)
    console.log("Bubble Sorte Ordenado Crescente", vetor1)
    bubblesortcres(vetor2)
    console.log("Bubble Sorte Ordenado Decrescente", vetor2)
    console.timeEnd("BubbleSort tempo")
    //SeleçãoDireta
    console.log("Vetor original", vetor)
    console.time("Seleção Direta tempo")
    selecaoDireta(vetor3)
    console.log("Seleção Direta Ordenado Crescente", vetor3)
    selecaoDiretaCres(vetor4)
    console.log("Seleção Direta Ordenado Decrescente", vetor4)
    console.timeEnd("Seleção Direta tempo")
    //InserçãoDireta
    console.log("Vetor original", vetor)
    console.time("Inserção Direta tempo")
    insercaoDireta(vetor5)
    console.log("Incerção Direta Ordenado Crescente", vetor5)
    insercaoDiretaDecre(vetor6)
    console.log("Inserção Direta Ordenado Decrescente", vetor6)
    console.timeEnd("Inserção Direta tempo")
    //QuickSort
    console.log("Vetor original", vetor)
    console.time("Quick Sort tempo")
    quicksort(vetor7, 0, vetor7.length - 1)
    console.log("QuickSort Ordenado Crescente", vetor7)
    quicksortDecrescente(vetor8, 0, vetor8.length - 1)
    console.log("QuickSort Ordenado Decrescente", vetor8)
    console.timeEnd("Quick Sort tempo")
}
principal()