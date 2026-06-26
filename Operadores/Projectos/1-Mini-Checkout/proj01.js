let valorSubtotal = 120;
const cupomDesconto = 'QUERO10';

const desconto = (cupomDesconto === 'QUERO10') ? 10 : 0;

valorSubtotal -= desconto;
console.log(valorSubtotal)  //110