let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona no fim do array
num.sort() // coloca em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor e ${num[0]}`) // zero é o primeiro elemento
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
}