const pontosUsuario = 999;

if (pontosUsuario >= 1000) {
    console.log("Acesso Diamante!");
} else if (pontosUsuario >= 500) {
    console.log("Acesso Platina!")
} else if (pontosUsuario >= 100) {
    console.log("Acesso Ouro!");
} else {
    console.log("Acesso Bronze");
}