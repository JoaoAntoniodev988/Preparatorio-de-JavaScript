const mes = "Julho";

switch (mes) {
    case "Junho":
    case "Julho":
    case "Agosto":
        console.log("Estação: Verão!");
        break;
    case "Dezembro":
    case "Janeiro":
    case "Fevereiro":
        console.log("Estação: Inverno!");
        break;
    default:
        console.log("Outras estação do ano.");
}