const carrinhoItens = 0;
const cupomDesconto = "PROMO10"
let valortotal = 250;

// 1. validação do carrinho:
if (carrinhoItens) {
    console.log("Carrinho válido! Processando cupão...");
}
// 1. Validação do carrinho:
if (carrinhoItens) {
    console.log("Carrinho válido! Processando cupão... 🛒");
    
    // 2. Aplicação do cupão:
    switch (cupomDesconto) {
        case "PROMO10":
            valorTotal = valorTotal - 10;
            console.log("Cupão PROMO10 aplicado! 10€ de desconto.");
            break;
        case "FRETEGRATIS":
            console.log("Cupão FRETEGRATIS aplicado! Portes oferecidos.");
            break;
        default:
            console.log("Nenhum cupão válido inserido.");
    }
    
    console.log("Total a pagar: " + valorTotal + "€");
} else {
    console.log("Erro: Não pode finalizar a compra com o carrinho vazio! ❌");
}


