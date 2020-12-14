function fountainActivation(locations) {
    let rangos = [];
    let n = locations.length;
    for (let i = 0; i < n; i++) {
        let rango = [Math.max((i + 1) - locations[i], 1), Math.min((i + 1) + locations[i], n)]
        rangos.push(rango);
    }

    console.log(rangos);

    let countFuentes = 0;
    for (i = 1; i <= n;) {
        let mayor;
        for (let j = i; j <= n; j++) {
            if (rangos[j - 1][0] <= i) {
                if (!mayor) mayor = 0;
                if (rangos[j - 1][1] > mayor) {
                    mayor = rangos[j - 1][1];
                }
            }
        }
        countFuentes++;

        i = mayor + 1;
    }
    console.log('finalFuentes');
    console.log(countFuentes);
}


let fountains = [0, 2, 1];
fountainActivation(fountains);