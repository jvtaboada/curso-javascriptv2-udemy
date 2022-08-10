/* DESAFIO CALCULO IMC - CALLBACK:
- IMC = peso / altura²
- Deve receber peso, altura e uma função callback *opcional* -> CHECK
- Se não receber callback, retornar o IMC calculcado -> CHECK
- Se receber callback, retornar o retorno do callback -> CHECK
*/

function calculaImc(p, h, callback){
    if(!p && !h && !callback){
        return 0;
    }else if(p && h){
       if(!callback){
            return parseInt((p / (Math.pow(h, 2))));
       } else if (typeof callback === "function"){
            return callback(parseInt((p / (Math.pow(h, 2)))));
       }
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
let imc2 = calculaImc(110, 1.69, classificaImc);
console.log(imc, imc2);

// console.log(`Seu IMC é de ${imc} Kg/m² e você é classificado como ${classificaImc(imc)}`);