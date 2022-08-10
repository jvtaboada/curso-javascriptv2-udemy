/* ...  = spread operator ou rest operator
    SPREAD OPERATOR: quebra a array e passa os elementos como parâmetros individuais
*/

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

function sum(){
    console.log(arguments);
    console.log(arguments.length);
}

sum(1,2,3); //arguments.lenght = 3
sum(arr); //arguments.lenght = 1

sum(...[1,2,3]); // === sum(...arr);

arr.push(...arr2); //vai adicionar os elementos certinhos no array2
console.log(arr);