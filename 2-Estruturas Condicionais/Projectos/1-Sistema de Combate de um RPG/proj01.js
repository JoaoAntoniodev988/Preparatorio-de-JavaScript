// Configuração do personagem
const nomeJogador = "Aragon";
const escudoAtivo = false
const porcaoDefesa = "Porção de Ferro";

// 1. Curto-circuito avaliando a defesa:
const defesaFinal = escudoAtivo || porcaoDefesa || false;

const feiticoBoss = "Raio"
let danoBase = 0;

// 2. Seleção do dano base:
switch (feiticoBoss) {
    case "Fogo":
        danoBase = 100;
        break;
    case "Gelo":
        danoBase = 80;
        break;
    case "Raio":
        danoBase = 120;
        break;
    default:
        danoBase = 50;
}

// 3. Resultado do impacto:
if (defesaFinal) {
    console.log("Defesa Aboluta! O ataque de" + feiticoBoss + "falhou. Dano sofrido: 0 🛡️");
} else {
    console.log("O jogador sofreu o impacto total! Dano sofrido:" + danoBase + " 🔥") 
}