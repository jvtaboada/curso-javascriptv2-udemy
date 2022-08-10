let a = "a";
let _a = "a";

console.log(a == _a);
console.log(a === _a);


let b = [];
let _b = []; 

console.log(b == _b); //porque tão comparando os espaços na memoria dos arrays, por eles serem vazios
console.log(b === _b);

b = _b; //as duas variáveis tem o mesmo espaço na memória, tem a mesma referência -> se alterar um, vai alterar os 2

b[0] = "teste";

console.log("array B:", b[0], "array _B:", _b[0]);

_b.push(true);

console.log(b, _b);

function alteraArray(a){
    a.push("novo item");
}

let arr = ["a", "b"];
console.log(arr);

alteraArray(arr); //passei uma referência de memória
console.log(arr);

//tipos primitivos é passagem por valor (precisa do return)
//passei um array por referência, então as alterações são "feitas globalmente"

function alteraPrimitivo(p){
    p += " adicionado";
    console.log("dentro da função: ", p);
}

let msg = "mensagem";
console.log(msg); //passagem por valor, quando voltar, não "contabiliza"

alteraPrimitivo(msg);
console.log(msg);

//OBJETOS = referência de memória