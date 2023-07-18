const disparos = [0, 50, 90, 80, 100, 80, 40];
let contador = 0;
for (let disparo of disparos) {
    if (disparo > 70) {
        contador = contador + 1;
    }
}

if (contador >= 3) {
    console.log(contador);
} else {
    console.log("ELIMINADO")
}