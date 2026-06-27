const numeroSecreto = 7;
let tentativaDoJogador = 0;
let acertou = false;

while (acertou === false) {
    tentativaDoJogador += 1;
    console.log("O jogador tentou o número: " + tentativaDoJogador);

   if (tentativaDoJogador === 7) {
    console.log("Parabéns! Descobriu o número secreto!");
    acertou = true
   } 
}

console.log("Fim do jogo");