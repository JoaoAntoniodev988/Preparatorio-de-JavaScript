const velocidade = 130;

if (velocidade <= 80) {
    console.log("Velocidade permitida. Boa viagem!");
} else if (velocidade <= 120) {
    console.log("Anteção: Acima do limite de velocidade, mas sem multa.");
} else {
    console.log("Multa! Velocidade perigosa!");
}