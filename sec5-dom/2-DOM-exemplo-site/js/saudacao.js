(function(){
    const nomeUsuario = null;
    const elemento = document.querySelector(".top-bar p");

    if(nomeUsuario){
        // document.querySelector(".top-bar p").textContent = `Bem vindo, ${nomeUsuario}!`
        // elemento.textContent =  elemento.textContent + `${nomeUsuario}!`
        // elemento.textContent += nomeUsuario; //textContent => é só o texto mesmo

        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"; //innerHTML => pega as tags html
    } else{
        // elemento.parentElement.style.display = "none";
        // elemento.parentElement.remove(); => não dá suporte a browsers antigos
        const elementoParaRemover = elemento.parentElement;
        elementoParaRemover.parentElement.removeChild(elementoParaRemover);
    }
    
})()