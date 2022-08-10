//var -> ES5 - cross browser

//let e const -> ES2015 (apenas um detalhe com IE11 e coisa mais véia)

let testelet = "string test";
let testelet = 10;
console.log(testelet);
//assim vai dar erro, porque não é a 1a vez que declaro a variavel, o let barra

var testevar = "string test"
var testevar = 10;
console.log(testevar);
//já com var, ele substitui normalmente e isso é perigoso

const testeconst = 10;
testeconst = 11;
//vai dar erro, porque é uma constante né rs/


const testeconst2;
//isso dá erro, pois a const precisa ser declarada e inicializada
//já var e let é tranquilo, pode declarar e depois usar


