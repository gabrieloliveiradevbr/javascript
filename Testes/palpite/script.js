let numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
function verificar() {
    tentativas ++
    let palpite = document.getElementById('palpite')
    let txt = document.getElementById('mensagem')
    let tentTela = document.getElementById('tentativas')
    let botaorest = document.getElementById('restaurar')
    let valor = Number(palpite.value)

    console.log(numeroSecreto)

    if (valor > numeroSecreto) {
        txt.textContent = '🔼 Muito alto!'
    } else if (valor < numeroSecreto) {
        txt.textContent = '🔽 Muito baixo!'
    } else {
        txt.textContent = '🎉 Acertou!'
        txt.style.color = 'green'
        botaorest.style.display = 'inline-block'
    }

    tentTela.textContent = `Tentativas: ${tentativas}` 
}

function restaurar() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1
    tentativas = 0

    document.getElementById('mensagem').textContent = ''
    document.getElementById('tentativas').textContent = 'Tentativas: 0'
    document.getElementById('palpite').value = ''
    let txt = document.getElementById('mensagem')
    txt.style.color = 'white'

    document.getElementById('restaurar').style.display = 'none'

    document.querySelector('button').disabled = false
}

