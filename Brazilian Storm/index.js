const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let maior = 0;
let menor = notas[0];
let media = 0;
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < menor) {
        menor = notas[i];
    }
    if (notas[i] > maior) {
        maior = notas[i]
    }

    soma = soma + notas[i];

}
media = (soma - maior - menor) / ((notas.length) - 2);

console.log(media);
