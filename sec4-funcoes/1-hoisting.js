const teste = function teste(){
    console.log("alouu funcionei");
}

teste();

//HOISTING (içamento - içar): funções e var são processadas no comeco do documentos JS porém
//var só é declarado, mas sem valor atribuido, logo dá undefined se eu chamar ela antes de declarar, MAS ELA EXISTE

console.log(minhaVar);
const minhaVar = "variavel";