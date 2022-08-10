/* TIPAGEM DINÂMICA: */

let x = 10; 
x = "string agora"

console.log(x);

let msg = "string"; // ou 'string'
let msg1 = 'uma "simples string';

console.log(msg1);

console.log("2" * 2, "-> not a good practice");

function teste(){
    console.log(this);
}

const teste2 = () => {
    console.log('teste 2');
    console.log(this);
}

teste();

const obj = {
    n: 0,
    //teste: teste,
    teste, 
    teste2
}

obj.teste2(); //this é diâmico, ele assume como objeto