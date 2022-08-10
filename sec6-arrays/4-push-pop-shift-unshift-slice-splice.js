/*
Array.MÉTODOS:
- push: adiciona elemento no final do array e retorna o novo .lenght do mesmo
- pop: remove o último elemento no final do array e retorna o ultimo item (que já foi retirado)
- shift: remove o primeiro elemento do inicio do array e retorna o primeiro item
- unshift: adiciona a partir do primeiro indice no inicio do array e retorna o .lenght do mesmo
- slice: faz um recorte A PARTIR DE um item até algum outro, ou só a partir
- splice: retorna os elementos removidos, a partir de um indice
*/

let arr = [1, 3, 5, 7, 9];

let teste = arr.push(11, true, "hello wrold");

console.log(teste);
console.log(arr);

let ultimoItem = arr.pop();
// let ultimoItem = arr[arr.length -1]

console.log(ultimoItem);
console.log(arr);

let primeiroItem = arr.shift();

console.log("método shift", primeiroItem);
console.log(arr);

teste = arr.unshift(4, 5, 6);
console.log("método unshift", teste);
console.log(arr);

let arr2 = arr.slice(6);
console.log("método slice:");
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2, 4, "ola mundo"); //a partir do 2 removeu 4 e adicionou os valores
console.log("método splice:");
console.log(arr);
console.log(arr3);