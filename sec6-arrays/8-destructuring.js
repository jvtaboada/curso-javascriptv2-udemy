const arr = [33, 7, 3];

console.log(arr);

const [n1, ,n2] = arr; //... => rest operator, faz o contrário do spread, junta o resto do vetor em uma var

// destructuring: [x, y] = array => está pegando os valores da array (na direita) e trazendo pras variáveis (na esquerda)
 
console.log(n1, n2);