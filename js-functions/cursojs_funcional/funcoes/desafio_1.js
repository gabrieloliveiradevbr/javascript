// Desafio 1
// somar (3)(4)(5)

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13)) // 3 + 4 + 13 = 20
console.log(somar(13)(20)(30)) // 13 + 20 + 30 = 63

// Desafio 2
// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

const calcular = function (x) {
    return function (y) {
        return function (fn) {
            return fn(x,y)
        }
    }
}

function soma(x,y) {
    return x + y
}

function subtrair(x,y) {
    return x - y
}

function multiplicar(x,y) {
    return x * y
}

console.log(calcular(3)(7)(multiplicar))
console.log(calcular(3)(7)(soma))
console.log(calcular(3)(7)(subtrair))