// const nomes = ["João", "Daniel", "Luan"];
// const idades = [21, 43, 20];

// console.log(nomes[0], idades[0]);

const pessoa = new Object();

pessoa.nome = "João";
pessoa.idade = 21;

let prop = "nome";

// console.log(pessoa.prop); -> assim não funciona, pq prop não é uma classe do objeto
console.log(pessoa[prop]); //assim ele pega o valor da variavel prop e assume como a classe pessoa.nome = João
console.log(pessoa["idade"]); //entre chaves e string
console.log(pessoa.nome);
console.log(pessoa.idade);
//^SINTAXE FORMAL DE OBJETOS



const registro = {
    nome: "Gabriel",
    idade: 23
}

console.log(registro);