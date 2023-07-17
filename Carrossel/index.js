const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">",];
let imagemAtual = 0;
for (let i = 0; i < sequencia.length; i++) {
    if ((sequencia[i] === ">") && (imagemAtual === 6)) {
        imagemAtual = 0;
    } else if ((sequencia[i] === "<") && (imagemAtual === 0)) {
        imagemAtual = 6;
    } else if (sequencia[i] === ">") {
        imagemAtual = imagemAtual + 1;
    } else if (sequencia[i] === "<") {
        imagemAtual = imagemAtual - 1;
    }
}

console.log(imagemAtual);