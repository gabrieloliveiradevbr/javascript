// curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)
const njFinalPrice = finalPrice(0.06625)

console.log(nycFinalPrice(25.1))
console.log(njFinalPrice(21.7))
console.log(njFinalPrice(107.9))