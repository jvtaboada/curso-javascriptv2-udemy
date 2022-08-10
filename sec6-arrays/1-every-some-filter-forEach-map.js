/*
Array.MÉTODO:
-every() => retorna booleano: testa se todos os elementos passam pelo teste
- some() => retorna booleano: testa se algum dos elementos passam pelo teste
- filter() => retorna uma nova array: elementos que retornam true são incluídos nessa nova array (filtragem mesmo)
- forEach() => não tem retorno: fazer uma iteração dentro do array, substituir FOR / WHILE
- map() => retorna uma nova array: invoca a função para cada elemento do Array
*/

const arr = [1, 5, 10, "olá", true];

let sohNumeros = arr.every( function(el){
    // console.log(el);
    return false;
});

let arr1 = arr.filter(function(el, i, _arr){
    return typeof el === "number";
})

arr.forEach(function (el, i, _arr){
    if(typeof el === "number"){
        console.log(`${i}: ${el}`);
    }
})

let arr2 = arr1.map(function(el, i, _arr){
    return el * el;
})

console.log(arr1);
console.log(arr2);

// console.log(sohNumeros);
// console.log(arr);
// console.log(arr1);