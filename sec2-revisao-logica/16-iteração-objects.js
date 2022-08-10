const pessoa = {
    nome: "João",
    idade: 21,
    "email": "joao_taboada@hotmail.com"
}

console.log(pessoa);

for(let iteracao in pessoa){ //aqui a parada é o 'in' associado a qualquer variavel que vc criar
    console.log(iteracao);
    console.log(pessoa[iteracao]);
}
//SINTAXE FOR IN