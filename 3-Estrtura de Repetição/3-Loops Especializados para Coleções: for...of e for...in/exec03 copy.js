const carro = {
    marca: "Tesla",
    modelo: "Model 3"
};

for (const chave in carro) {
    console.log(chave + ": " + carro[chave]);
}