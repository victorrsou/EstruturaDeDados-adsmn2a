    // 2. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria
    // função para isso.

var readline = require('readline-sync');

function ordemCrescente(array) {
    
    let maiorValor, meioValor, menorValor;

    if (array[0] <= array[1] && array[0] <= array[2]){
        menorValor = array[0];
        if(array[1] <= array[2]){
            meioValor = array[1];
            maiorValor = array[2];
        } else {
            maiorValor = array[1];
            menorValor = array[2];
        }
    } else if(array[1] <= array[0] && array[1] <= array[2]) {
        menorValor = array[1];
        if(array[0] <= array[2]){
            meioValor = array[0];
            maiorValor = array[2];
        } else {
            meioValor = array[2];
            maiorValor = array[0];
        }
    } else {
        menorValor = array[2];
        if(array[0] <= array[1]){
            meioValor = array[0];
            maiorValor = array[1];
        } else {
            meioValor = array[1];
            maiorValor = array[0];
        }
    }

    console.log("Os valores em ordem crescente são: " + maiorValor + ", " + meioValor + " e " + menorValor);
}

arrayInserido = [];

num1 = readline.question("Digite o primeiro valor: ");
num2 = readline.question("Digite o segundo valor: ");
num3 = readline.question("Digite o terceiro valor: ");

arrayInserido.push(num1);
arrayInserido.push(num2);
arrayInserido.push(num3);

ordemCrescente(arrayInserido);