`use strict`

function cadastrar (){
    const NomePagina = document.getElementById(`nome`)
    let NomeDigitado = prompt ("Digite um nome")

    NomePagina.textContent = NomeDigitado

    if (NomeDigitado == ''){
        NomeDigitado = 'ERRO'

    }

        NomeDaPagina.textContent = NomeDigitado
}

const botaoNome = document.getElementById('trocarNome')

botaoNome.addEventListener('click', trocarNome)

