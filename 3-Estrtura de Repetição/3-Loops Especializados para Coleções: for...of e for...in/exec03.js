const precos = [10, 20, 5];
let totalFatuta = 0;

for (const valor of precos) {
    totalFatuta += valor;
}

console.log("Total a pagar: " + totalFatuta + "$")