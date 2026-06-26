let valorSubtotal = 120;
const cupomDesconto = 'QUERO10';

const desconto = (cupomDesconto === 'QUERO10') ? 10 : 0; //ternário
valorSubtotal -= desconto;
console.log(valorSubtotal)  //110

const ehClientePremium = false;

// O frete é grátis se o valor final for maior ou igual a 100 OU se o cliente for Premium.
const ganhouFreteGratis = (valorSubtotal >= 100) || ehClientePremium; //comparação e operador lógico
console.log(ganhouFreteGratis)

// Lembramos que: ganhouFreteGratis = true e valorSubtotal = 110
const valorFrete = ganhouFreteGratis ? 0 : 15;

const totalPagar = valorSubtotal + valorFrete;
console.log(totalPagar);