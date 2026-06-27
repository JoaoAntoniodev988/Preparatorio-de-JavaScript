function calcularTotalPromocao(listaDePrecos) {
    let total = 0;
    
    for (const preco of listaDePrecos) {
        if (preco < 10) {
            continue; // Salta os menores de 10€!
        }
        total = total + preco;
    }
    
    return total; // Devolve o valor final acumulado!
}

// A testar a máquina que criaste:
const faturaCliente = [5, 20, 3, 50];
const resultadoFinal = calcularTotalPromocao(faturaCliente);

console.log("O cliente vai pagar: " + resultadoFinal + "€"); // Imprime: 70€