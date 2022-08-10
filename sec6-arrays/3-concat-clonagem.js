let arr1 = ["a", "b", "c"];
// let arr2 = arr1; //recebendo o mesmo endereço de memória, altera os 2 juntos

let arr2 = [].concat(arr1); //faz uma cópia que mantém intacto o primeiro arr

arr2[arr2.length] = "novo valor";

console.log(arr1);
console.log(arr2);