function fn(cb){
    console.log("Executar ação de callback");
    console.log(typeof cb);

    typeof cb === "function" && cb();
}

function callback(){
    console.log("Função passada por parâmetro");
}

//função anonima é sem nome, mt utilizada e pode -> function (){};
fn(callback);

//callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação

const obj = {
    //callback: callback; IGUAL EMBAIXO
    callback
}

obj.callback();

function fn2(n1){

    return function(n2){
        return n1*n2;
    }
}

const funcao2 = fn2(10);
const mult = funcao2(2);
//10 * 2 = 20

console.log(mult);


function fn3(){
    fn3.count++;
    return function _fn3(){
        console.log("Função retornada por parametro");
    }
}

fn3.count = 0;

const funcao3 = fn3();
const funcao3a = fn3();
const funcao3b = fn3();

funcao3();

console.log(fn3.count);


//FUNÇÃO NO JAVASCRIPT É CONSIDERADA COMO OBJETO, ENTÃO POSSO CRIAR PROPRIEDADES
