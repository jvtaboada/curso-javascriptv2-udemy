//OPERADORES ARITMÉTICOS + - * / % **
let n1 = 10;
let n2 = 5;
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);
console.log(2 ** 3);


//OPERADORES DE ATRIBUIÇÃO: = += -= *= /= %= ++ --
//operadores rapidos
let n3 = 20; 
//n3 = n3 + 15 = 35
n3 += 15; //= 35

n3 = n3 - 10;
n3 -= 10;

n3 = n3 * 2;
n3 *= 2;

n3 = n3 / 5;
n3 /= 5;

n3 = n3 % 2;
n3 %= 2;

//incremento e decremento
let i = 0;

i = i + 1;
i += 1;
i ++;

i = i - 1;
i -= 1;
i --;

let j = 0;
console.log("post incremento", j++);
console.log("post incremento", j);

let k = 0;
console.log("pre incremento", ++k);
console.log("post incremento", k);


/*OPERADORES DE COMPARAÇÃO: 
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valores e tipos diferentes
*/ 

n1 = 10;
n2 = 5;
console.log(n1 == 10);
console.log(n1 === "10");
console.log(n1 === 10);

console.log(n1 != "10");
console.log(n1 !== "10");


/*OPERADORES LÓGICOS:
    AND &&
    OR || 
    NOT !
*/

/*Para uma pessao viajar para o exterior:
 - precisa ser maior de 18 anos 
OU
 - acompanhado com os pais
E
 - ter comprado o bilhete
*/

let idade = 18;
let paisPresentes = false;
let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);
//precedência de operadores lógicos: 1º && , 2° ||


n1 = 6;
n2 = 8;
let media = n1 + n2 / 2;
console.log(`media: ${media}`);
//precedência de operadores matemáticos: segue a matemática

