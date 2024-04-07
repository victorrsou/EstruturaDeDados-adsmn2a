// 5) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100.

totalNumeros = [];
qtdValores = 100;

for(i = 0; i < qtdValores; i++) {
    totalNumeros.push(i);
};

for (i = 0; i < totalNumeros.length ; i++) {
    if(totalNumeros[i] % 2 == 0) {
        console.log(Math.pow(totalNumeros[i], 2));
    }
};
