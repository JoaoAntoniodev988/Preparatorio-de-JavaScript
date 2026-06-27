function calcularTotalPromocao(listadePrecos) {
    let total = 0;
    for(const preco of listadePrecos) {
        if (preco < 10) {
            continue;
        }

        total += preco;
    }

    return total
}

console.log(total)