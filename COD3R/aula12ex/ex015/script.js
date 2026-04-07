function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique as informações e tente novamente!')
    } else {
        var fsex = document.querySelector('input[name="radsex"]:checked')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex.value == 'masculino') {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/homem/menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/homem/jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem/adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/homem/idoso.png')
            }
        } else if (fsex.value == 'feminino') {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/mulher/menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/mulher/jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher/adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/mulher/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}