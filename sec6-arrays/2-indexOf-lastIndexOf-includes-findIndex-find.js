/*
NOTA:
-lastIndex, index e indexOf: compatível até com IE 11
find, findIndex, includes: não funciona em nenhuma versão do IE 11
*/

/*
Array.MÉTODO:
- indexOf: retorna o primeiro indíce com o valor  (se tiver mais que 1)
- lastIndexOf: retorna o ultimo indice com o valor (se tiver mais que 1)
- includes: retorna booleano se encontra o valor 
- find: retorna o primeiro elemento que  (callback = true), se não = undefined
- findIndex: retorna o indice onde o valor do elemento for (callback = true), se não = -1
*/

let arr = [4, 5, 10, 20, 35, 4, 5];

console.log(arr.lastIndexOf(5));

console.log(arr.includes(5));
console.log(arr.find(function (el){
    return el > 10;
}))

console.log(arr.findIndex(function (el){
    return el > 10;
}))

