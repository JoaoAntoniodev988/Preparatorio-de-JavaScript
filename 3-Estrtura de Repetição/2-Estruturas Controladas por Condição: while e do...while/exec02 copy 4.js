let saldo = 100;
let quatidadeDeLevangtamentos = 0;

do {
    saldo -= 100; 
    quatidadeDeLevangtamentos += 1;
    console.log("Levantamento efetuado! Saldo atual: " + saldo + " $ ");
} while (saldo > 0 );
console.log("Sessão encerrada. Total de lenvantamentos: " + quatidadeDeLevangtamentos);