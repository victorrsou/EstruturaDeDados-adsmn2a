// Crie uma função que recebe um vetor com vários números e um número específico como
// argumento. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas
// o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e
// lastIndexOf).

const readline = require('readline-sync');

arrayInserido = [];

function mostrarIndices(array, num) {

    var indiceApresentado = [];

    for(i = 0; i < array.length; i++) {

        if(array[i] == num ) indiceApresentado.push(i);
    }

    console.log("O valor dos índices do valor inserido são: " + indiceApresentado)

};

qtdArray = parseInt(readline.question("Digite o valor de elementos dentro do array: "));

for (i = 0; arrayInserido.length <= qtdArray - 1 ; i++) {
    let valorInserido;
    valorInserido = parseInt(readline.question(`${i + 1}) Digite o valor a ser inserido no array: `))

    arrayInserido.push(valorInserido)

};

verificarValor = parseInt(readline.question("Informe o valor que deseja pesquisar os indices: "))

mostrarIndices(arrayInserido, verificarValor);


