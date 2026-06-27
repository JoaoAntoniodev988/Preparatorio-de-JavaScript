const tipoEnvio = "Expresso";

switch (tipoEnvio) {
    case "Normal":
        console.log("Entrega em 5 dias úteis");
        break;
    case "Expresso":
        console.log("Entrega em 2 dias úteis.");
    
    case "SuperRápido":
        console.log("Entrega em 3 horas!");
        break;
    default:
        console.log("Método de envio desconhecido.");
}