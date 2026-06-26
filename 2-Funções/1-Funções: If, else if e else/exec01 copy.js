const temperatura = 100;

if (temperatura < 20) {
    console.log("A água está fria.");
} else if (temperatura < 100) {
    console.log("A água está quente"); 
} else if (temperatura === 100) {
    console.log ("A água está a ferver!");
} else {
    console.log("Temperatura crítica! Desligar o sistema!");
}