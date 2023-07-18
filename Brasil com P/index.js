const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];
const palavrasBoas = [];
for (let palavra of palavras) {
    if ((palavra[0] === primeiraLetra) && (palavra[1] === segundaLetra)) {
        palavrasBoas.push(palavra);
        console.log(palavra);
    }
}
if (palavrasBoas.length === 0) {
    console.log("NENHUMA");
}