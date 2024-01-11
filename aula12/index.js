let va = 'a'; //b
let vb = 'b'; //c
let vc = 'c'; //a

let aux = null;

// aux = va;
// va = vb;
// vb = vc;
// vc = aux;
// aux = null;

[va, vb, vc] = [vb, vc, va]

console.log(va, vb, vc);

