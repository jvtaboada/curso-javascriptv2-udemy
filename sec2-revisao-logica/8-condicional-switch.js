let diaSemana = "2";
let dia = "";

switch (diaSemana){
    case 0:
        dia = "domingo";
        break;
    case 1:
        dia = "segunda";
        break;
    case 2:
        dia = "terça";
        break;
    case 3:
        dia = "quarta";
    case 4:
        dia = "quinta";
        break;
    case 5:
        dia = "sexta";
        break;
    case 6:
        dia = "sabado";
        break;
    default:
        dia = " -- ";
        //switch é === IGUALDADE DE TIPO E VALOR
}

console.log(`Dia da semana: ${dia}`);