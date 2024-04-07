// 1. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o
// método sort.
var readline = require('readline-sync');

function ordemCrescente(array) {

    if (array[0] < array[1]) {
        let primeiroValor = array[0]; 
        let segundoValor = array[1];

        array[0] = segundoValor;
        array[1] = primeiroValor;

        console.log("Os valores em ordem crescente são: " + array[0] + " " + array[1])

    } else {
        console.log("Os valores estão em ordem crescente: " + array[0] + " " + array[1]);       
    }
}

arrayInserido = [];

num1 = readline.question("Digite o primeiro valor: ");
num2 = readline.question("Digite o segundo valor: ");

arrayInserido.push(num1);
arrayInserido.push(num2);

ordemCrescente(arrayInserido);

