const somar = function s(){
    //arguments é um objeto que é tipo um objeto Array, que corresponde aos argumentos passados para uma funça -> não preciso especificar o numero de parametros/variaveis recebidos na função... uso arguments

    /*arguments: 
    - conta com posições igual o array, de 0 -> N
    - tem a propriedade .lenght, pra fazer o seu comprimento
    - vantagem de chamar uma função com mais argumentos do que ele é formalmente declarado para aceitar
    - não funciona com arrow function, apenas com regular function e function expression
    */
    console.log(arguments);

    let total = 0;

    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }

    return total;
}

console.log(somar.name);

console.log(somar(1,2,3));
console.log(somar(1,2,3,45));
console.log(somar(1,2,3,100,32));