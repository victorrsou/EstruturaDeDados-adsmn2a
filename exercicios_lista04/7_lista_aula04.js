// Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os
// números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores
// do array.
const readline = require('readline-sync');

function mostrarFibonacci(qtd) {
    let arrayValores = [];
    let valorAtual = 1;
    let valorProximo = 1;

    for(i = 0; i < qtd ;i++) {
        arrayValores.push(valorAtual);
        let temp = valorProximo;
        valorProximo = valorAtual + valorProximo;
        valorAtual = temp
    }
    console.log(arrayValores);
};

qtdFibonacci = parseInt(readline.question("Informe a quantidade de valores fibonacci a ser apresentado: "));

mostrarFibonacci(qtdFibonacci);
