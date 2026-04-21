function bomDia() {
    console.log("Bom dia!")
}

const boaTarde = function () {
    console.log("Boa tarde!")
}

function executarQualquerCoisa(fn) {
    if (typeof fn == 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2. Retornar uma função a partir de uma outra função

function potencia(base) {
    return function (expoente) {
        return Math.pow(base, expoente)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potenciaDe3 = potencia(3)
console.log(potenciaDe3(8))

const potencia4elevadoa3 = potencia(4)(3)
console.log(potencia4elevadoa3)