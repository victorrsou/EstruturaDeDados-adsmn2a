// Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = ';
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!
const readline = require('readline-sync');

function apresentarFatorial(num) {
    let numAtual = 1;
    let valorFatorial = 0;
    let arrayFatorial = [];
    let valorFinal = 1;
    for(i = 1; i <= num; i++) {
        valorFatorial = numAtual * i
        arrayFatorial.push(valorFatorial)
    }
    let valorArmazenado = 1;
    for (i = 0; i < arrayFatorial.length; i++) {
        valorArmazenado = valorFinal
        valorFinal = arrayFatorial[i] * valorArmazenado;
    }
    console.log(valorFinal)
}

qtdFatorial = parseInt(readline.question("Informe o número para apresentar o fatorial: "));
apresentarFatorial(qtdFatorial);

