const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n){
        if(n > this.qtd){//referência ao objeto atual
            return "qtd não disponível";
        }
        this.qtd -= n;
    },
    teste1: function(){
        console.log("teste1", this);
    },
    teste2: () =>{ //na arrow function, o this não é o objeto em questão
        console.log("teste2", this); 
    }
}

//produto.comprar(3);
console.log(produto);

//produto.comprar(25);
console.log(produto);
produto.teste1(); //regular function ==> próprio Object
produto.teste2(); //arrow function ==> this -> Window
