const eVip = false;
const valorTotal = 100;

// O ternário vai decidir quanto vale a variável 'desconto'
const desconto = eVip ? 20 : 5;

// Agora fazemos a conta matemática usando o resultado do ternário
const valorFinal = valorTotal - desconto

console.log(valorFinal); // 80
