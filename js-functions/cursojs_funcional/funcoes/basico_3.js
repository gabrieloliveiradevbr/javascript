// arrow function
const felizNatal = () => console.log("Feliz Natal!")
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`
// "Fala " + nome + ", blz?!?"
console.log(saudacao("Isabella"))

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

const subtrair =  (a, b) => a - b

console.log(subtrair(4, 1))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Mini Desafio
// Criar uma função que retorne uma função que calcule a potencia de um número utilizando arrow function
const potencia = base => expoente => Math.pow(base, expoente)

console.log(potencia(2)(8))

//this
Array.prototype.imprimir = function () {
    console.log(this)
}

Array.prototype.primeiro = function () {
    console.log(this[0])
}

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3]
numeros.imprimir()
numeros.primeiro()
numeros.ultimo()