const categoriaCarro = "Eco";
const estaChover = false;
let precoBase = 0;

// 1. Definição do preço base:
switch (categoriaCarro) {
    case "Eco":
        precoBase = 5;
        break;
    case "Normal":
        precoBase = 8;
        break;
    case "Premium":
        precoBase = 15;
        break;
    default:
        precoBase = 7;
}

// 2. Curto-circuito da Chuva:
const multiplicadorChuva = estaChover && 1.5 || 1;
const precoFinal = precoBase * multiplicadorChuva;

console.log(`Viagem ${categoriaCarro} confirmada. Preço Final: ${precoFinal} "€ 🚗`)
