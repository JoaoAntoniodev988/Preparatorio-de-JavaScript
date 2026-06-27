function calcularBilhete(quantidade, precoUnitario = 7) {
    return (quantidade * precoUnitario) + 2;
}

console.log(calcularBilhete(2, 10));

console.log(calcularBilhete(2));