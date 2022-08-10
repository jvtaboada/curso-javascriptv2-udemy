//para agrupamento de dados
const registroJoao = {
    nome: "João",
    idade: 21
}

const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    registroJoao}, {
    nome: "Maria",
    idade: 29
}, {
    nome: "Kybas",
    idade: 22
 }];

 console.log(pessoas);
 console.log(pessoas[3].nome);

 //ITERAÇÃO DE ARRAY DE OBJETOS
 for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos de idade`);
 }