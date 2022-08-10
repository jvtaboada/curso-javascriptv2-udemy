/* DESAFIO CALCULAR IMC:
- IMC = peso / altura² -> CHECK
- Deve retornar um único numero -> CHECK
- Deve gerar erro se receber um parâmetro não numero -> CHECK
- Deve retornar erro caso não receba OS 2 PARAMETROS NECESSARIOS (peso e altura) -> CHECK
 */

/* DESAFIO CLASSIFICAR IMC:
- Deve receber um número (o IMC) -> CHECK
- Deve retornar uma string -> CHECK
- Deve gerar um erro se receber um parametro não numero -> CHECK
- Deve retornar erro caso não receba nenhum parâmetro -> CHECK  
*/

(function(){
    function calculaImc(p, h){
        if( p === undefined || h === undefined){ //verifica se tem 2 parametros
            throw Error("Faltou algum parâmetro");
        } else if(typeof p !== "number" || typeof h !== "number"){ //verifica se os 2 são do tipo number
            throw Error("Não é aceito valores não-numéricos para o cálculo do IMC");
        } else{
            return parseInt((p / (Math.pow(h, 2))));
        }
    }

    function classificaImc(indice){
        if(!indice){
            throw Error("Valor de IMC não consta para classificação");
        } else if (typeof indice !== "number"){
            throw Error("Não é aceito valor não-numérico para IMC");
        } else{
            if(indice <= 16.9){
                return "muito abaixo do peso.";
            } else if(indice <= 18.4){
                return "abaixo do peso.";
            } else if(indice <= 24.9){
                return "peso normal.";
            } else if(indice <= 29.9){
                return "acima do peso.";
            } else if(indice <= 34.9){
                return "obeso."
            } else{
                return "obesidade grau alto."
            }
        }
    }

    let imc = calculaImc(70, 1.69);

    console.log(`Seu IMC é de ${imc} Kg/m² e você é classificado como ${classificaImc(imc)}`);

})(); //funão auto invocavel = IIFE