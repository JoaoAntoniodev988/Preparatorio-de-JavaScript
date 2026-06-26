// 1. Dados do Cliente e do Pedido
const salarioMensal = 3500; 
const valorPrestacaoProposta = 900;
let scoreCredito = 620; // Pontuação de bom pagador (vai de 0 a 1000)
const temHistoricoNegativo = false; // Nome sujo na praça?

// Calculando o limite máximo que a prestação pode ter (30% do salário)
const limitePrestacao = salarioMensal * 0.3;
console.log(limitePrestacao)

// Checando se a prestação proposta cabe no orçamento (ou seja, se é menor ou igual ao limite)
const parcelaCabeNoOrcamento = valorPrestacaoProposta <= limitePrestacao

//Análise do histórico financeiro.
const scoreCredito = 620;
const temHistoricoNegativo = false;

const bomHistorico = !temHistoricoNegativo; 
const perfilAprovado = (scoreCredito >= 600) && bomHistorico;

// O sistema decide se concede o crédito
const emprestimoConcedido = parcelaCabeNoOrcamento && perfilAprovado

// O sistema define a taxa de juros com base na aprovação
const taxaJuros = emprestimoConcedido ? 5 : 0;