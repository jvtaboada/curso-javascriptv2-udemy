const arr = new Array();

console.log(typeof arr);
console.log(arr);

//array é um objeto!

const arr2 = new Array(true, "João", 21, new Array(2, 4, "Maria"));
console.log(arr2);

arr[0] = "Kybite";
arr[1] = 22;

console.log(arr[0], arr[1]);
console.log(arr);

console.log(arr2[3][arr2[3].length - 1]);
//^ SINTAXE FORMAL!


const arr3 = ["Jhow", 23, [1, 2 , 3], false];

console.log(arr3);
console.log(arr3[2][1]);// 1, 2, 3 | 2

arr3[4] = "new value"; //poder dar m
arr3[arr3.length] = "new value 2"; //1 jeito de add valor no fim do array
arr3.push("adicionado com push()"); //outro jeito 
arr3.push("a", "b", "c");

console.log(arr3);
console.log(arr3[6]);
//^ SINTAXE LITERAL!