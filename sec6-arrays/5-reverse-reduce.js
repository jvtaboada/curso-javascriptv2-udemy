/*
Array.MÉTODOS:
- reverse: reverte o array, cuidado pois altera de fato o array
- reduce: iteração em cada elemento, retorna um único em valor
*/

let arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr);

let j = 0;
let soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log("i: ", i);
    console.log("j: ", j++);
    console.log("acumulador: ", acumulador, "atual: ",  atual);
    return acumulador + atual;
}, "hello world")

console.log(soma);
console.log(arr);

const nomes = ["João", "Daniel", "Kybite", "Karina"]

let nomesOrdenados = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]; //"D"

    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++;
    } else{
        nomes[primeiraLetra] = 1;
    }

    return nomes;

}, {} );

console.log("TESTE DO REDUCE COM NOMES:");
console.log(nomesOrdenados);