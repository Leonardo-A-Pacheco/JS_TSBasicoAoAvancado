// apresentar seu "nome" e a hora que está aprendendo js
var nome = 'Leonardo';
var dataAtual = new Date();

var hora = dataAtual.getHours();
var minuto = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds();

// var horaAtual = hora + ':' + minuto + ':' + segundos;

console.log('Meu nome é ' +'"'+ nome +'". '+ ' Estou aprendendo JS às: ' +
hora + ':' + minuto + ':' + segundos);

