
// function init(){
//     let isValid = false;
//     console.log("init menu", isValid);
// }
// init();

/*FUNÇÃO AUTO INVOCÁVEL: gera um escopo isolado de cada arquivo, pra não "vazar pro global" 

- Hoje em dia já temos umas ferramentas que já fazem a função dessas IIFE, são elas: Bundle (webpack, parcel), ESModules (browser moderno), programar em Node (nativamente adota um padrão através do CommonJS Modules, tipo o ESModules)
*/ 

(function (win, doc){ //passando parametro pra função IIFE
    "use strict" 
    isValid = false;
    win.alert("oiee");
    console.log("init menu", isValid);

    function init(){
        console.log("init do menu");
    }
    
    init();
})(window, document); //pra manipular window e document

console.log("isValid", isValid); //vazei/polui a variavel pro global -> utilizar use strict para evitar então