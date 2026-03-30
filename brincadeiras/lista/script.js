let total = 0

function adicionar() {
    let produto = document.getElementById('produto')
    let preco = document.getElementById('preco')
    let lista = document.getElementById('lista')
    let totalTela = document.getElementById('total')

    // 1️⃣ campos vazios
    if (produto.value == '' || preco.value == '') {
        alert('Preencha todas as caixas')
        return
    }

    let valor = Number(preco.value)
    
    // 2️⃣ número inválido
    if (valor <= 0) {
        alert('Digite um preço válido')
        preco.focus()
        return
    }

    // 3️⃣ criar item
    let item = document.createElement('li')
    item.style.color = 'black'
    item.textContent = `${produto.value} - R$ ${valor.toFixed(2)}`
    lista.appendChild(item)

    total += valor
    totalTela.textContent = `R$ ${total.toFixed(2)}`

    // 4️⃣ limpar
    produto.value = ''
    preco.value = ''
    produto.focus()

    item.dataset.valor = valor

    item.addEventListener('click', function() {
    total -= Number(item.dataset.valor)
    totalTela.textContent = `R$ ${total.toFixed(2)}`
    item.remove()
})
}