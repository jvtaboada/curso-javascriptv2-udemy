let n = "global";

function mostraN(){
    n = "local"; //assim, só alterei o valor da variável criada global
    console.log("valor de n: " + n);
}

mostraN(); 
console.log("valor de n: " + n);
// local | local -> porque troquei o valor da variável globalmente

let x = "global";



function mostraX(){
    let x = "local"; //já desse jeito, criei uma variavel pra usar localmente, então não troquei a de fora
    console.log("valor de x: " + x);
}

mostraX(); 
console.log("valor de x: " + x);
//local | global -> porque o valor da variavel declarada globalmente não mudou, pq "criei uma nova" pra usar local



function mostraX2(){
    let x2 = "local"; 

    if(true){
        let x2 = "x2 dentro de if com let"; //demonstração de ESCOPO DE BLOCO vindo da propriedade do LET, essa variavel x2 nem existe fora desse bloco (loop, if, etc.)
        var x3 = "x3 dentro de if com var"; 
        
        /* !!! VAR escopo de função != LET escopo de bloco !!!*/
    }

    console.log("valor de x2: " + x2);
    console.log(x3);
}
mostraX2();