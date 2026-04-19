/*
* Função de primeira classe
* Funções são cidadãos de primeira classe em JS
* Podem ser passadas como argumentos para outras funções
* Podem ser retornadas por outras funções
* Podem ser atribuídas a variáveis
*/

const add = function (a, b) {
    return a + b
}

const substract = function (a, b) {
    return a - b
}

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

console.log(add(10, 20))
console.log(substract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))