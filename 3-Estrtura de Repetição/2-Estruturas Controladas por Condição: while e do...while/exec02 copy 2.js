let bateriaTelemovel = 100;

do {
    console.log("A verificar saúde da bateria... Atual: " + bateriaTelemovel + "%")
    bateriaTelemovel -= 50
} while (bateriaTelemovel > 100);

console.log("Analise de energia concluida.");