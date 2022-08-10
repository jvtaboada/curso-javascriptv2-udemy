let n1 = 10;
let n2 = "2";
console.log(n1 * n2);
//conversão implícita, converte pra numero pra fazer o cálculo = inteligência do JavaScript

console.log(n1 + n2);
//o problema é que o sinal de + além de somar, ele concatena, então dá ruim. Semprre converter para numero para operações 

//CONVERSÕES: parseInt, parseFloat, Number()

//parseInt:
n2 = parseInt(n2);//conversão explícita
console.log(n1 + n2);

let n3 = "10.42323";
console.log(typeof n3, n3);

n3 = parseInt(n3); //conversão explícita, tira o ponto flutuante
console.log(typeof n3, n3); 

n3 = parseFloat(n3); //conversão explícita, e mantém o numero flutuante
console.log(typeof n3, n3);

let n4 = "1989uasdhikosdajsadsaf13322352534";
n4 = parseInt(n4);
console.log(n4); //converte e tira todos os caracteres depois de reoconhcer alguma letra/string MAS não funciona para o Number()

let n5 = "asidjasdi19839";
n5 = parseInt(n5);
console.log(n5); //dá erro not a number - NaN

let n6 = "oi";
n1 = 10;
console.log(n6*1); //dá erro not a number - NaN
console.log(n6+n1); //concatena

let n7 = 11;
n7 = n7.toString; //conversão string
console.log(n7, typeof n7);

//decimais: 0-9
//hexadecimais: 0-F

n7.toString(16);
console.log("numero em base hexadecimal: ", n7);

n7.toString(2);
console.log("numero em base binária: ", n7);