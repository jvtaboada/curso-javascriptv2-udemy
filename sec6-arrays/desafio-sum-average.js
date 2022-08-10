/* 
    DESAFIO: Criar duas funções: sum() e average()
    - As funções podem receber 1 ou +  parâmetros
    - Use e abuse das facilidaes do ES6
*/

function sum(){
    const numbers = Array.from(arguments);
    //const numbers = [...arguments]
    let soma = 0;
    
    for(n of numbers){
        soma += n;
    }

    return soma;
}

function average(){
    return sum(...arguments) / arguments.length;
}

let resultadoSoma = sum(1, 2, 3, 4, 5, 15, 2)
console.log(resultadoSoma);

let resultadoMedia = average(1, 2, 3, 4, 5, 15, 2);
console.log(resultadoMedia);
