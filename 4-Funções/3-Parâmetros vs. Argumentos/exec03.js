const taxaSistema = 2;

function calcularBilhete(quatidade, precoUnitario) {
    const total = (quatidade * precoUnitario) + taxaSistema;
    return total;
}

const minhaConta = calcularBilhete(3, 7)
console.log(minhaConta)