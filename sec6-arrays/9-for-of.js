const arr = [3333, 76345, 7777];
const obj ={
    nome: "Maria",
    idade: "28",
    email: "maria@gmail.com"
}

for(let prop in obj){
    console.log(prop, ":", obj[prop]);
    // console.log(obj[prop]);
}

for (n of arr){
    console.log(n);
}