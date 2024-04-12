// Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os
// números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores
// do array.
const readline = require('readline-sync');

function mostrarFibonacci(qtd) {
    let arrayValores = [];
    let valorFibo = 1;
    let valorAnterior = 0;

    for(i = 0; i < qtd ;i++) {


        if (arrayValores.length == 0) {

            arrayValores.push(valorFibo)
        } else {
            valorFibo += valorAnterior
    
            arrayValores.push(valorFibo);
    
            valorAnterior += valorFibo
        }


    }

    console.log(arrayValores);
};

qtdFibonacci = parseInt(readline.question("Informe a quantidade de valores fibonacci a ser apresentado: "));

mostrarFibonacci(qtdFibonacci);
