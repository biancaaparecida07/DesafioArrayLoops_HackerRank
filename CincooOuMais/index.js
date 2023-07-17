const produtos = [100, 500, 100, 100, 50];

let total = 0;
for (valor of produtos) {
    total += valor;
}
if (produtos.length >= 5) {
    let menor = produtos[0];
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] < menor) {
            menor = produtos[i];
        }
    }
    console.log(total - menor);
} else {
    console.log(total)
}
