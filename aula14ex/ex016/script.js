function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Preencha todos os campos!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0){
            window.alert('Passo inválido! Considere o passo como 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
function resetar(){
    document.getElementById('inicio').value = ''
    document.getElementById('fim').value = ''
    document.getElementById('passo').value = ''
    document.getElementById('res').innerHTML = ''
}

