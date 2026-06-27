const numeros = [1, 2, 3, 4, 5];

for (const num of numeros ) {
    if (num % 2 === 0) {
        continue;
    }
    console.log("Número Ímpar: " + num);
}