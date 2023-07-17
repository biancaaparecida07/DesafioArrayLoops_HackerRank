const stringCorrompida = "*Canis %lupus )familiaris";
let stringCorreta = "";
for (let i = 0; i < stringCorrompida.length; i++) {
    if ((stringCorrompida[i] === "!") || (stringCorrompida[i] === "@") || (stringCorrompida[i] === "#") || (stringCorrompida[i] === "$") || (stringCorrompida[i] === "%") || (stringCorrompida[i] === "&") || (stringCorrompida[i] === "*") || (stringCorrompida[i] === "(") || (stringCorrompida[i] === ")")) {
        stringCorreta = stringCorreta + "";
    } else {
        stringCorreta = stringCorreta + stringCorrompida[i]
    }
}
console.log(stringCorrompida)
console.log(stringCorreta);
