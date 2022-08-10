//criar um array com numeros random não repetidos

function generateRandomIntNumber(max){
    return parseInt(Math.random() * max);
}

let arr = [];

while(arr.length <= 20){
    let randomNumber = generateRandomIntNumber(30);
    console.log(randomNumber);

    if(arr.indexOf(randomNumber) == (-1)){
        arr.push(randomNumber);
    } else {
        console.log(randomNumber, "já existe no arr")
    }
}//demonstração de um caso que o while é "mais útil que o for, porque não sabemos quantas vezes precisa ser executado"

console.log(arr);