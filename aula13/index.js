//as strings são indexaveis
//               0123456789...
let umaString = 'um "textinho"';

//se usar a barra invertida \ funciona como escape
console.log(umaString);

console.log(umaString[4]);

console.log(umaString.charAt(6));


console.log(`${umaString} concatenando tudo`);
// ou 
console.log(umaString + ' concatenando tudo');
//ou
console.log(umaString.concat(' concatenando tudo'));

//descobrir o indice da palavra textinho

console.log(umaString.indexOf('textinho', 0));
// buscando de tras para frente
console.log(umaString.lastIndexOf('um', 5));
//trocando valores
console.log(umaString.replace('um', 'unico'));
//tamanho total da string
console.log(umaString.length);
//                 0123456789
let outraString = 'cavalos são pessoas grandes';

// separando por indice
console.log(outraString.slice(8, 11));
console.log(outraString.slice(-7));

// separando string conforme caractere
console.log(outraString.split(' '));
console.log(outraString.toLocaleUpperCase());
console.log(outraString.toLocaleLowerCase());









