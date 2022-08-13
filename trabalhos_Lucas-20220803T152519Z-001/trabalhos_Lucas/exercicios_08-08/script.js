function verificar() {
    let nome = document.getElementById('nomeuser').value
    let data = new Date()
    let ano = data.getFullYear()
    let nascimento = document.getElementById('nasc')
    let res = document.getElementById('res')
    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) {
        window.alert('[ERRO] Ano Inválido - Verifique os dados e tente novamente [ERRO]')
    }else {
        let idade = ano - Number(nascimento.value)
        res.innerHTML = `Seu nome é <strong>${nome}</strong> e você tem <strong>${idade} anos.</strong>`
    }
}