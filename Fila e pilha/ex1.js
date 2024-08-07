function Filas(a, b, c) {
    x = 0
    y = 0
    for (let i = 0; i < a.length +1; i++) {
        for (let j = 0; j < b.length +1; j++) {
            x = a.shift()
            c.push(x)
            y = b.shift()
            c.push(y)
        }
    }
}
let fila = [2, 4, 6, 8, 10]
let fila2 = [1, 3, 5, 7, 9]
let fila3 = []
Filas(fila, fila2, fila3)
console.log("", fila3)