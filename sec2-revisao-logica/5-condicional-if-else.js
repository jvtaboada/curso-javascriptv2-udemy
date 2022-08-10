let idade = 22;
let paisPresentes = false;
let comprouBilhete = true;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);
//precedência de operadores lógicos: 1º && , 2° ||


let n1 = 6;
let n2 = 8;
let media = n1 + n2 / 2;
console.log(`media: ${media}`);
//precedência de operadores matemáticos: segue a matemática

if (comprouBilhete){ //SE A VARIÁVEL JÁ RECEBE UM VALOR BOOLEANO, PODE DEIXAR IMPLICITO
    console.log("Sim. Comprou o bilhete");
}
else{
    console.log("Não, não comprou o bilhete");
}
//IGUAL A:
if (!comprouBilhete){ 
    console.log("Não, não comprou o bilhete");
}
else{
    console.log("Sim. Comprou o bilhete");
}


/*let msgMaiorIdade = "";

if(idade >= 18){
    msgMaiorIdade = "É maior de 18 anos";
} else{
    msgMaiorIdade = "É menor de 18 anos";
}*/


//OPERADOR TERNARIO: (condição) ? true : false
//let msgMaiorIdade = (idade >= 18) ? true : false;
let msgMaiorIdade = (idade >= 18) ? "É maior de 18 anos" : "É menor de idade";


if (!comprouBilhete){ 
    console.log("Não, não comprou o bilhete");
}
else{
    /*if(idade >= 18){
        console.log("É maior de idade, pode viajar");
    }
    else{
        console.log("Opa, é menor hein!");
    }*/
    console.log(msgMaiorIdade);
}