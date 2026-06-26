const comandoVoz = "Ligar ar condicionado";

switch (comandoVoz) {
    case "ligar luzes":
        console.log("Luzes acesas!");
        break;
    case "desligar luzes":
        console.log("Tudo escuro!");
        break;
    case "abrir cortinas":
        console.log("Cortinas abertas!");
        break;
    default:
        console.log("Comando não reconhecido. Tente novamente!");
}