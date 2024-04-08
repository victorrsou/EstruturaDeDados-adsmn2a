// 4. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array ao
// contrário (generalização do script anterior).

const readline = require('readline-sync');

var qtdValores;
var arrayInserido = [];

function exibirValores(array) {
    arrayInvertido = [];

    for (i = array.length -1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
       
    console.log("Os valores que foram inseridos inicialmente foram: " + array);
    console.log("Os valores dispostos ao contrário: " + arrayInvertido)
}

qtdValores = parseInt(readline.question("Informe quantos valores voce deseja digitar: "));

for(i = 0; i < qtdValores; i++) {
    arrayInserido[i] = parseInt(readline.question(`${i + 1}) Informe o valor: `));
}

exibirValores(arrayInserido);