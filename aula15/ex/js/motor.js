// const numero = Number(prompt('digite um numero'));
// let numero = prompt('digite um numero');
// COMO O PROMPT RECOLHE STRING É IMPORTANTE FAZER TYPECASTING
// numero = Number(numero);

// const numeroTitulo = document.getElementById('numero-titulo');
// const texto = document.getElementById('texto');

// numeroTitulo.innerHTML = numero;
// texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}.</P>`;
// texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</P>`;

let numero = Number(prompt('digite o numero'));

let n = document.getElementById('algarismo');
n.innerHTML = `${numero}`;

let raiz = document.getElementById('raiz');
raiz.innerHTML = `${Math.sqrt(numero)}`;

let inteiro = document.getElementById('inteiro');
inteiro.innerHTML = `${Number.isInteger(numero)}`;

let up = document.getElementById('up');
up.innerHTML = `${Math.floor(numero)}`;

let dw = document.getElementById('dw');
dw.innerHTML = `${Math.ceil(numero)}`;


/*
    <section>
      <h1>o seu numero é <span id="algarismo">0</span></h1>
      <h1>raiz quadrada do numero: <span id="raiz">0</span></h1>
      <h1>numero é inteiro? <span id="inteiro">0</span></h1>
      <h1>arredonda pra cima: <span id="up">0</span></h1>
      <h1>arredonda pra baixo: <span id="dw">0</span></h1>
    </section>
*/



