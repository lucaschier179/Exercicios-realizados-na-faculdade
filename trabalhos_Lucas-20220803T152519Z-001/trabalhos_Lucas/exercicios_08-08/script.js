function verificar() {
    let nome = document.getElementById('nome'.value)
    let ano = data.getFullYear()
    let nascimento = document.getElementById('nascimento'.value)
    let res = document.getElementById('res')
    if (nascimento.value == 0 || Number(nascimento.value) > ano) {
        window.alert('[ERRO] Ano Inválido - Verifique os dados e tente novamente [ERRO]')
    }
        alert(ano)
}