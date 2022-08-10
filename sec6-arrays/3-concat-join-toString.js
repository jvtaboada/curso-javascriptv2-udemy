/*
Array.MÉTODOS:
- toString: representação em string do array => transforma em string
- join: retorna o array em string => transforma em string, mas pode colocar um parâmetro na função
- concat: concatena tudo, seguindo a sintaxe => arr1.concat(<o que quiser>)
*/

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];

console.log(typeof arr1.toString());
console.log(arr1.join(" - "));

let arr3 = arr1.concat(arr2, 4, 8, 9, 10, [true, "olá", "kkkkkk"]);

console.log(arr1);
console.log(arr2);
console.log(arr3);