function compras (tb1, tb2) {
    const comprarSorvete = tb1 || tb2
    const comprarTv50 = tb1 && tb2
    const comprarTv32 = tb1 != tb2 //simula ou exclusivo (xor)
    const saudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, saudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

