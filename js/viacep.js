/* 'use strict';

const limparForm = () =>{
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}

const preencherForm = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

const eNumero = (numero) => /^[0-9]+$/.test(numero)

const cepValido = (cep) => cep.length == 8 && eNumero(cep)

const pesquisarCep = async() =>{
    limparForm()
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json()
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado'
        } else{
            preencherForm(endereco)
        }
    } else{
        document.getElementById('endereco').value = 'CEP inválido'
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep) */

'use strict';

const limparForm = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherForm = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro || '';
    document.getElementById('bairro').value = endereco.bairro || '';
    document.getElementById('cidade').value = endereco.localidade || '';
    document.getElementById('estado').value = endereco.uf || '';
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length === 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparForm();
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const enderecoEl = document.getElementById('endereco');

    if (cepValido(cep)) {
        try {
            const dados = await fetch(url);
            const endereco = await dados.json();
            if (endereco.hasOwnProperty('erro')) {
                enderecoEl.textContent = 'CEP não encontrado';
            } else {
                preencherForm(endereco);
                enderecoEl.textContent = ''; // Clear any previous error message
            }
        } catch (error) {
            enderecoEl.textContent = 'Erro ao buscar CEP';
            console.error(error);
        }
    } else {
        enderecoEl.textContent = 'CEP inválido';
    }
}

document.getElementById('cep').addEventListener('blur', pesquisarCep);