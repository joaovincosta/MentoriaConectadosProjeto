const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Erro(index){
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function RemoveErro(index){
    campos[index].style.border = ''
    spans[index].style.display = ''
}

function emailValidate(){
    if(!emailRegex.test(campos[0].value)){
        console.log("helloword")
        Erro(0)
    } else{
        RemoveErro(0)
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailValidate();

    // Se todas as validações estiverem corretas, pode prosseguir com o envio do formulário
    // Caso contrário, o formulário não será enviado até que todas as validações estejam corretas
});