//DESAFIO: Ao invés de retornar um objeto, retornar com reduce => um array com numeros unicos, excluindo os repetidos

const numeros = [1, 3, 4 , 1, 4, 5, 3, 5, 8, 9];

let j = 0;
const numerosUnicos = numeros.reduce( function(numerosUnicos, numeroAtual ){  //acumulador e valor atual
    if(numerosUnicos.indexOf(numeroAtual) < 0){ //se não encontrar com indexOf, retorna -1 => não tem no array
        numerosUnicos.push(numeroAtual); //adiciona numero atual como elemento no array de numeros unicos
    }

    return numerosUnicos;
}, [])

console.log(numerosUnicos);

// const numerosUnicos = [1, 3, 4, 5, 8, 9];