const preco = [30, 10, 54, 76, 1, 4, 35];
let menorDiferenca = Infinity;
for (let i = 0; i < preco.length; i++) {
    for (j = i + 1; j < preco.length; j++) { //comparando com o futuro
        let auxMenorDiferenca = preco[i] - preco[j];
        if (preco[j] < preco[i] && auxMenorDiferenca < menorDiferenca) {
            menorDiferenca = auxMenorDiferenca;
        }
    }
}


console.log(menorDiferenca)