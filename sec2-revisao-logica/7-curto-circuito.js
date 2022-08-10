let n = 0;

if(!n){ //0 é falsy value, então NÃO FALSE = TRUE ==> Executa essa linha
    n = 10;
}

console.log(n);

//CURTO CIRCUITO
n = n || 10;
console.log(n);

let isValid = false;

//if(isValid){
  //  console.log("É válido");
//}//NÃO VAI SER EXECUTADO, POIS O ARGUMENTO NO TESTE IF É FALSO

//isValid && console.log("É válido!");

isValid || console.log("É válido");

let x;

x = 0 || true;
console.log(x); //RECEBE TRUE

x = 0 && true;
console.log(x); //RECEBE 0