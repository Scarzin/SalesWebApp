function fun1(){}

const fun2 = function () {}

const arr = [function(a,b) { return a+b}, fun1, fun2, (a,b) => a-b]
console.log(arr[0](2,3))
console.log(arr[3](2,3))

const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar())

function run(fun){
    fun()
}

run(function() {console.log('executando...')})


function soma(a,b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)