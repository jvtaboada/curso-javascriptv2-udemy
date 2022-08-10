/*
MÉTODOS DIFERENTES CHAMAR FUNÇÃO:
- call => passa um parametro nulo e depois os parametros
- apply => passa um parametro nulo e depois um array, que ele entende como parametros separados
*/

function sum(){
    const numbers = [];

    // for(let i=0; i < arguments.length; i++){
    //     numbers.push(arguments[i]);
    // }

    
    Array.prototype.forEach.call(arguments, function(argument){
        numbers.push(argument)
    })

    return numbers.reduce(function (sum, atual){
        return sum + atual;
    })

    // arguments.forEach(function(argument){
    //     numbers.push(argument);
    // }) => TIPO ISSO AQUI, dá push em cada elemento do arguments

    console.log(numbers);
}

console.log(sum(1, 2, 3, 4, 5));

function average(){
    const soma = sum.apply(null, arguments);

    return soma / arguments.length;
}

console.log(average(1, 2, 3, 4, 5));

// sum.call(null, 1, 2, 3, 4, 5);
// sum.apply(null, [1, 2, 3, 4, 32]);
