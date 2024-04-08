// 3. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

const readline = require('readline-sync');

var num1, num2, num3;
var arrayInserido = [];

function inverterValores(array) {
    console.log("Os valores inseridos ao contrário são: " + array[2] + ", " + array[1] + " e " + array[0])
}

num1 = parseInt(readline.question("Digite o primeiro valor: "));
num2 = parseInt(readline.question("Digite o segundo valor: "));
num3 = parseInt(readline.question("Digite o terceiro valor: "));

arrayInserido.push(num1);
arrayInserido.push(num2);
arrayInserido.push(num3);

inverterValores(arrayInserido);
