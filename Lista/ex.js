function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new Node(element), current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
        console.log("",head,"",current)
    }

    this.size = function () {
        return length;
    };
    this.toString = function () {
        let current = head, string = ''
        while (current) {
            string += current.element + (current.next ? ' -> ' : '')
            current = current.next
        }
        return string;
    }
    this.empty = function () {
        return length == 0
    }
    this.remove = function () {
        let current = head
        if (this.empty()) {
            return -1
        } else {
            head = current.next
            length--
            return current.element
        }
    }
    this.insert = function () {
        let newHead = new Node(100);
        newHead.next = head;
        head = newHead;
        length++
    }
    this.posição = function () {
        let node = head
        let elemento = 78
        posição = 0
        while (node) {
            if (node.element == elemento) {
                return posição
            }
            node = node.next
            posição++
        }
        return -1
    };
    this.removePos = function () {
        let posição = 0;
        let current = head;
        let pos = 4;
        if (pos < 0 || pos >= length) {
            console.log("Posição inválida.");
            return;
        }
        if (pos == 0) {
            head = current.next;
            length--;
            return;
        }
        while (current != null && posição + 1 < pos) {
            current = current.next;
            posição++;
        }
        if (current != null && current.next != null) {
            current.next = current.next.next;
        }
        length--;
    };
}
const lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(78);
lista.append(14);
lista.append(98);
lista.append(0);

console.log("Tamanho da lista: " + lista.size() + " elementos");
console.log("Lista: " + lista.toString());
console.log("Elemento removido: " + lista.remove());
console.log("Lista: " + lista.toString());
lista.insert();
console.log("Lista após inserção: " + lista.toString());
console.log("A posição do elemento é: " + lista.posição());
lista.removePos();
console.log("Lista após remoção por posição: " + lista.toString())
