
        alunos=['Lucas', 'Cristiano', 'Gabriel', 'Zequinha']
        
        function apresentar() {
            document.getElementById('lista').innerHTML=alunos
        }

        function inserir() {
            if (nome.value != '') {
                alunos.push(nome.value)
                document.getElementById('nome').value=''    
            } else{
                alert('[ERRO] Insira um nome [ERRO]')
            }
        }

        function encontra_indice() {
            indice=parseInt(document.getElementById('indice').value)
            if (indice < alunos.length){
                alert(alunos[indice])
            }else {
                alert ("Número de índice não encontrado, este vetor possui "+ (alunos.length - 1) +' posições')
            }
        }

        function remover(){
            alunos.pop()
        }

        function inserir_unshift() {
            if (nome.value != '') {
                alunos.unshift(nome.value)
                document.getElementById('nome').value=''    
            } else{
                alert('[ERRO] Insira um nome [ERRO]')
            }
        }
        
        function remover_shift() {
            alunos.shift()
        }

    