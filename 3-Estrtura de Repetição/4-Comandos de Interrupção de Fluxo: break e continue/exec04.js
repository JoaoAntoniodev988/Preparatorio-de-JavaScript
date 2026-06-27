const ficheiros = ["foto.jpg", "musica.mp3", "Virus.exe", "documento.pdf"]

for (const item of ficheiros) {
    if (item === "Virus.exe") {
        console.log("Ameaça detetada: " + item + "! Bloquear sistema");
        break
    }
    console.log("Ficheiro limpo: " + item);
}