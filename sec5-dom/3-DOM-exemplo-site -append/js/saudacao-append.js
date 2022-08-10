(function(){
    const nomeUsuario = "Paula";
    
    if(nomeUsuario){
        const topBarElement = document.createElement("div");
        topBarElement.className = "top-bar";
        topBarElement.innerHTML = `<p> Olá, <b>${nomeUsuario} </b> </p>`

        // elementoPai.insertBefor(novoElemento, elementoReferencia)

        const elementoPai = document.querySelector(".hero");
    
        elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild);
    }
})()