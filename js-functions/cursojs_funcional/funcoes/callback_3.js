
const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const ultimaLetra = texto => texto[texto.length - 1]
const letras2 = nomes.map(ultimaLetra)
console.log(nomes, letras2)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome1 = item => item.nome
const nomeItens1 = carrinho.map(getNome1)
console.log(nomeItens1)

const getTotal1 = item => item.preco * item.qtde
const totalItens1 = carrinho.map(getTotal1)
console.log(totalItens1)

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(`==> ${resultado}`)
    }
    return novoArray
}

const getNome = item => item.nome
const nomeItens = carrinho.meuMap(getNome)
console.log(nomeItens)

const getTotal = item => item.preco * item.qtde
const totalItens = carrinho.meuMap(getTotal)
console.log(totalItens)