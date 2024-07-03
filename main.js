const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const foneRegex = /^[0-9]+$/

function Erro(index){
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function RemoveErro(index){
    campos[index].style.border = ''
    spans[index].style.display = ''
}

function nameValidate(){
    if(campos[0].value.length < 3){
        Erro(0)
    } else{
        RemoveErro(0)
    }
}

function apelidoValidate(){
    if(campos[1].value.length <= 1){
        Erro(1)
    } else{
        RemoveErro(1)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[2].value)){
        Erro(2)
    } else{
        RemoveErro(2)
    }
}

function foneValidate(){
    if (foneRegex.test(campos[3].value) || campos[3].value.length < 11 ){
        Erro(3)
    } else{
        RemoveErro(3)
    }
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function cpfValidate() {
    const cpf = campos[4].value.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || !TestaCPF(cpf)) {
        Erro(4)
    } else {
        RemoveErro(4)
    }
}

campos[4].addEventListener('blur', cpfValidate)

function senhaValidate(){
    if(campos[5].value.length <= 8){
        Erro(5)
    } else{
        RemoveErro(5)
    }
}

// Máscaras
function mask(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout(execmask, 1);
}

function execmask() {
    v_obj.value = v_fun(v_obj.value);
}

// Máscara para telefone
function masktel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

// Máscara para CPF
function maskcpf(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

// Máscara para CEP
function maskcep(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
}


document.addEventListener('DOMContentLoaded', function() {
    idcss('fone').addEventListener('input', function() {
        this.value = masktel(this.value);
    });

    idcss('cpf').addEventListener('input', function() {
        this.value = maskcpf(this.value);
    });

    idcss('cep').addEventListener('input', function() {
        this.value = maskcep(this.value);
    });

    campos[3].addEventListener('blur', function() {
        this.value = masktel(this.value);
    });

    campos[4].addEventListener('blur', function() {
        this.value = maskcpf(this.value);
    });

    idcss('cep').addEventListener('blur', function() {
        this.value = maskcep(this.value);
    });
});

function idcss(el) {
    return document.getElementById(el);
}