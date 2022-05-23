// function imprimirSoma(a, b) {
//     console.log(a+b)
// }
// imprimirSoma(2,5)
// imprimirSoma(2,5,7,8,9)
// imprimirSoma(2)


// function soma(a, b = 1) {
//     return a+b
// }
// console.log(soma(2,3))
// console.log(soma(2))

const imprimirSoma = function (a,b) {
    console.log(a+b)
}
imprimirSoma(2,3)


const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))

const sub = (a,b) => a-b

console.log(sub(3,2))

const imprimir2 = a => console.log(a)
imprimir2("legal!!!")
