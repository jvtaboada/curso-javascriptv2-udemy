/* FUNÇÃO PARA CALULCAR MÉDIA:
- Pode receber 1 ou mais valores numericos -> CHECK arguments
- Deve retornar um único número -> CHECK return normal
- Deve gerar um erro se receber um parâmetro não número -> CHECK if typeof !== gera um 'throw Error("")'
- Deve retornar zero caso não receba nenhum parâmetro -> CHECK curto circuito retorna 0 se a operação der falsa

EX: calcularMedia(); // 0
    calcularMedia(2, 6); // 4
    calcularMedia(2, 6, 1, 1, 2, 6) // 3
    calcularMedia("2", "6"); // ERROR
*/

(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length;

        //se n passar valor, nem faz o loop e faz 0/0 = NaN
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("SÓ NÚMEROS");
            }
            total += arguments[i];
        }

        return (total / qtd) || 0; //curto circuito: se total/qtd der algum valor false (tipo NaN = falsy value) a funcao retorna 0 devido a condicional OU (||)
    }

    let media = calcularMedia();
    console.log(media);
})()