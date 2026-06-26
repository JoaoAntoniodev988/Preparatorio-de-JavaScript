let nivelAtual = 9;
let experienciaAtual = 950;
const bossDerrotado = true; // Ele derrotou o grande chefe da fase!
experienciaAtual += 100

const subiuDeNivel = (experienciaAtual >= 1000) && bossDerrotado;

// Se 'subiuDeNivel' for true, aumentamos o nível em 1. Se for false, aumenta 0.
const aumetoDeNivel = subiuDeNivel ? 1 : 0;
nivelAtual += aumetoDeNivel;

// O sistema checa se ele cumpre pelo menos um dos requisitos para equipar a arma
const podeEquiparEspada = (nivelAtual >= 10) || bossDerrotado;

