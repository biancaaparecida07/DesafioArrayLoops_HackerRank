const resultados = ["V",
    "E",
    "V",
    "E"]

let pontos = 0;

for (sigla of resultados) {
    if (sigla === "V") {
        pontos = pontos + 3;
    } else if (sigla === "E") {
        pontos += 1;
    } else if (sigla === "D") {
        pontos = pontos;
    }
}

console.log(pontos);