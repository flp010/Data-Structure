function TabelaHash(tamanhoInicial) {
    this.tabela = new Array(tamanhoInicial).fill(null);
    this.tamanho = tamanhoInicial;

    this.calcularHash = function(chave) {
        return chave.charCodeAt(0) % this.tamanho;
    };

    this.inserirChave = function(chave) {
        let indice = this.calcularHash(chave);
        while (this.tabela[indice] !== null && this.tabela[indice] !== "REMOVIDO") {
            indice = (indice + 1) % this.tamanho;
        }
        this.tabela[indice] = chave;
    };

    this.buscarChave = function(chave) {
        let indice = this.calcularHash(chave);
        while (this.tabela[indice] !== null) {
            if (this.tabela[indice] === chave) {
                return indice;
            }
            indice = (indice + 1) % this.tamanho;
        }
        return -1;
    };

    this.removerChave = function(chave) {
        let indice = this.buscarChave(chave);
        if (indice !== -1) {
            console.log("Removendo elemento: " + chave);
            this.tabela[indice] = "REMOVIDO";
        }
    };

    this.imprimirTabelaHash = function() {
        console.log("Estado atual da tabela de hash:");
        console.log(this.tabela);
    };
}

let tamanhoInicial = prompt("Digite o tamanho inicial da tabela de hash:");
if (tamanhoInicial === null || tamanhoInicial === "" || isNaN(tamanhoInicial) || tamanhoInicial <= 0) {
    console.log("Tamanho inválido. Encerrando o programa.");
} else {
    let tabelaHash = new TabelaHash(Number(tamanhoInicial));

    while (true) {
        let operacao = prompt("Escolha uma operação:\n1. Inserir chave\n2. Buscar chave\n3. Remover chave\n4. Imprimir tabela de hash\n5. Sair");

        if (operacao === null || operacao === "" || operacao === "5") {
            console.log("Encerrando o programa.");
            break;
        }

        switch (operacao) {
            case "1":
                let chaveInserir = prompt("Insira um caractere para inserir na tabela de hash:");
                if (chaveInserir !== null && chaveInserir !== "") {
                    tabelaHash.inserirChave(chaveInserir);
                } else {
                    console.log("Operação de inserção cancelada.");
                }
                break;
            case "2":
                let chaveBuscar = prompt("Insira um caractere para buscar na tabela de hash:");
                if (chaveBuscar !== null && chaveBuscar !== "") {
                    let indice = tabelaHash.buscarChave(chaveBuscar);
                    if (indice !== -1) {
                        console.log(`Elemento '${chaveBuscar}' encontrado no índice ${indice}`);
                    } else {
                        console.log(`Elemento '${chaveBuscar}' não encontrado.`);
                    }
                } else {
                    console.log("Operação de busca cancelada.");
                }
                break;
            case "3":
                let chaveRemover = prompt("Insira um caractere para remover da tabela de hash:");
                if (chaveRemover !== null && chaveRemover !== "") {
                    tabelaHash.removerChave(chaveRemover);
                } else {
                    console.log("Operação de remoção cancelada.");
                }
                break;
            case "4":
                tabelaHash.imprimirTabelaHash();
                break;
            default:
                console.log("Operação inválida. Tente novamente.");
                break;
        }
    }
}
