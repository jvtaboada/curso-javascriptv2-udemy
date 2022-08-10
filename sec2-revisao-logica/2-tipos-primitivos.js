//strings, number (int, floats), boolean
//undefined, null, symbol (ES2015 = ES6)
//STRINGS:
let varString = "my 'string' test";
//let varString2 = 'my 'string' test'; -> errado

let varString3 = 'my "string" test';
//let varString4 = "my "string" test"; ->  errado

//let varString5 = "my \"string"\ test"; -> errado

var varString6 = `my literal template`;
//tudo igual, prestar atenção sobre a "hierarquia das aspas simples e duplas"


let idade = 25;
//let msg = "eu possuo " + idade +  " anos";  -> DÁ CERTO, mas fica mais complicado
let msg = `eu possuo ${idade} anos`; //jeito mais moderno de concatenar, fica mais claro visualmente

console.log(msg);
console.log(typeof msg, typeof idade, typeof varString6, "--", 2+2);


//NUMBER:
const n1 = 10;
const n2 = 1.1;

console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`);
//demonstração que é number, não INT ou FLOAT

const isValid = true;

console.log(`isValid: ${isValid}`, typeof isValid);


//UNDEFINED
let varTeste;
console.log(varTeste, typeof varTeste);

varTeste = 10;
console.log(varTeste, typeof varTeste);

let varSemValor = undefined;
let varSemValor = null; //mais recomendado