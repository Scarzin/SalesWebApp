const saudacao = `opa` //contexto lexico 1 (arquivo)

function exec() {
    const saudacao = `falaaa` //contexto lexico 2 (funcao)
    return saudacao
}


//Obj sao grupos aninhados de pares nome/valor
const cliente = {
    nome: `pedro`,
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: `rua doida`,
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
