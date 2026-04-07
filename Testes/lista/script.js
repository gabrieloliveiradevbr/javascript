let total = 0

function adicionar() {
    let produto = document.getElementById('produto')
    let preco = document.getElementById('preco')
    let lista = document.getElementById('lista')
    let totalTela = document.getElementById('total')

    if (produto.value == '' || preco.value == '') {
        alert('Preencha todas as caixas')
        return
    }

    let valor = Number(preco.value)
    
    if (valor <= 0) {
        alert('Digite um preço válido')
        preco.focus()
        return
    }

    let item = document.createElement('li')
    item.style.color = 'black'
    item.textContent = `${produto.value} - R$ ${valor.toFixed(2)}`
    lista.appendChild(item)

    total += valor
    totalTela.textContent = `R$ ${total.toFixed(2)}`

    produto.value = ''
    preco.value = ''

    item.dataset.valor = valor

    item.addEventListener('click', function() {
    total -= Number(item.dataset.valor)
    totalTela.textContent = `R$ ${total.toFixed(2)}`
    item.remove()
})
}

function finalizar() {
    if (total === 0) {
        alert('Nenhum item na lista')
        return
    }

    alert(`Total da compra: R$ ${total.toFixed(2)}`)

    let lista = document.getElementById('lista')
    lista.innerHTML = ''

    total = 0
    document.getElementById('total').textContent = 'R$ 0.00'
}