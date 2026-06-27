const TAXA_FRETE_PADRAO = 5.99;
const LIMITE_FRETE_GRATIS = 50.00;

const calcularTotalCariinho = function(listaPrecos, cupom = 0) {
    let somaProdutos = 0;
    for (const preco of listaPrecos) {
        somaProdutos += preco;
    }

    let valorComDesconto = somaProdutos - cupom;

    if (valorComDesconto < 0) {
        valorComDesconto = 0;
    }

    let freteFinal = TAXA_FRETE_PADRAO;
    if (valorComDesconto >= LIMITE_FRETE_GRATIS) {
        freteFinal = 0;
    }

    return valorComDesconto + freteFinal;
};

const carrinhoDoCarlos = [15.00, 10.00];
const totalCarlos = calcularTotalCariinho(carrinhoDoCarlos, 5);
console.log("Carlos vai pagar: " + totalCarlos + "$")

const carrinhoDaAna = [40.00, 30.00, 10.00];
const totalAna = calcularTotalCariinho(carrinhoDaAna);
console.log("Ana vai pagar: " + totalAna + "$")

