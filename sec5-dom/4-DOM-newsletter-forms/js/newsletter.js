const txtEmail = document.getElementById("txtEmail");

// const msgFeedback = document.getElementById("newsletterFeedback");

// function cadastrarEmail(){
//     let email = txtEmail.value; 
//     //recuperar os valores no momento certo, só no momento de click do botão por exemplo
//     //em formulario: não é innerHTML, nem textContent, é .VALUE!
//     msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`
// }

function editarEmail(){
    txtEmail.disabled = false;
    txtEmail.focus();
}

function disableEmail(){
    txtEmail.disabled = true;
}