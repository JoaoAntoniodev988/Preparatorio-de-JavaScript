const carrinhoDeCompras = [10, 20, 150, 30, 50, 80];
let totalFatura = 0;

for (const preco of carrinhoDeCompras) {
    if (preco > 100) {
        console.log("Produtos de " + preco + "$ precisa de autorização. A saltar...");
        continue;
    }

    totalFatura += preco;
    console.log("Produtos adicionado: " + preco + "$ (Total atual: " + totalFatura + "$")

    if (totalFatura >= 200) {
        console.log("Limite de crédito atintido!");
        break;
    }
}

console.log("Fatura Finalizada! Valor a pagar: " + totalFatura + "$");