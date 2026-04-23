const boletim = [
    { nome: 'Thiago', nota: 8.00 },
    { nome: 'Ana', nota: 9.50 },
    { nome: 'Bia', nota: 5.50 },
    { nome: 'Lia', nota: 4.00 },
    { nome: 'Rafa', nota: 10.00 }
]

const teste1 = aluno => aluno.nota >= 7
const aprovados = boletim.filter(teste1)
console.log(aprovados)

const teste2 = aluno => aluno.nome
const nomes = boletim.map(teste2)
console.log(nomes)

const teste3 = (total, aluno) => {
    return total + aluno.nota
}
const total = boletim.reduce(teste3, 0)
console.log(total)

const maiorque7 = boletim.filter(teste1).map(teste2)
console.log(maiorque7)

const avg = (acc, aluno, i, array) => {
    if (i === array.length - 1) {
        return (acc + aluno.nota)/ array.length
    } else {
        return acc + aluno.nota
    }
}

const media = Math.floor(boletim.reduce(avg, 0))
console.log(media)

// const teste2 = aluno => aluno.nome
// const nomes = boletim.map(teste2)
// console.log(nomes)

const melhor = (melhorAtual, aluno) => {
    if (aluno.nota > melhorAtual.nota) {
    return aluno;
    } else {
    return melhorAtual;
    }
}

const maior = boletim.reduce(melhor)
console.log(maior)
