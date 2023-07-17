const letra = "m";
const palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"];
let quantidade = 0;

for (let palavra of palavras) {
    if (palavra[0] != letra) {
        quantidade += 1;
    }
}

console.log(quantidade)