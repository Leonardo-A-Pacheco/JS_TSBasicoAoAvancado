// criando uma estrutura dasegunte forma
// leonardo pacheco, tem 70 anos, pesa 200 kg, tem 1.80 M de altura, e seu imc é: 12.1231203981379, leonardo pacheco nasceu em 13331312

let nome = 'leonardo';
let sobrenome = 'pacheco';

let idade = 70;
dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

let peso = 270;
let altura = 1.81111;
let imc;// peso/altura²

imc = peso / (altura * altura);

console.log(
    nome +' '+sobrenome+' tem '+ idade +' anos'+
    ' Pesa '+ peso + 'KG, tem ' + altura + ' M de altura'+
    ` Seu imc é: ${imc}, ` +  nome +' '+sobrenome+' nasceu em: ' + (-idade + anoAtual)
);

