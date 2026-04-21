let a = 4
console.log(a)

// Function Declaration
function bomDia() {
    console.log("Bom dia!")
}

bomDia()

// Function Expression
const boaTarde = function () {
    console.log("Boa tarde!")
}

boaTarde()


function somar(a = 0, b = 0) {
    return a + b
}

const resultado = somar(3, 4)
console.log(resultado)

const resultado2 = somar(3, 5)
console.log(resultado2)

const resultado3 = somar(3)
console.log(resultado3)

const resultado4 = somar()
console.log(resultado4)