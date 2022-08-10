const teste = function (cb){
    console.log("Função teste");

    if(typeof cb === "function"){
        cb("Passado por parametro para CB");
    }
}

const fn = function(param){ //tá armazenando a função de fato e não o retorno da função
    console.log("Função anônima de callback");
    console.log(param);
}

// fn(30);

teste(fn);