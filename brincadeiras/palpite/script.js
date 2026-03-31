let numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
function verificar() {
    tentativas ++
    let palpite = document.getElementById('palpite')
    let txt = document.getElementById('mensagem')
    let tentTela = document.getElementById('tentativas')
    let valor = Number(palpite.value)

    console.log(numeroSecreto)

    if (valor > numeroSecreto) {
        txt.textContent = '🔼 Muito alto!'
    } else if (valor < numeroSecreto) {
        txt.textContent = '🔽 Muito baixo!'
    } else {
        txt.textContent = '🎉 Acertou!'
        txt.style.color = 'green'
    }

    tentTela.textContent = `Tentativas: ${tentativas}`
    
    
    
}

