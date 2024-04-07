// 4) Faça um algoritmo em JavaScript que leia um conjunto de 15 valores, um de cada vez, utilizando
// estrutura de repetição, acompanhados de um código 1 ou 2. O valor representa o número de cobaias
// utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente coelhos e
// ratos. Mostre no final:
// a. o total de cobaias utilizadas;
// b. o total de coelhos;
// c. total de ratos; e
// d. o percentual de coelhos e ratos.
var readline = require('readline-sync');

qtdValores = 1
todosValores = []
valorInserido = 0
qtdCoelhos = 0
qtdRatos = 0
totalCobaias = 0
codigoCobaia = 0

while(16 > qtdValores) {
    do {
        codigoCobaia = readline.question(`${qtdValores}) Favor, digite o codigo da cobaia, somente são validos os valores "1" e "2": `);
    } while(codigoCobaia != 1 && codigoCobaia != 2);
    numeroCobaia = readline.question("Agora digite o numero de cobaias neste experimento: ");

    codigoCobaia = parseInt(codigoCobaia);
    numeroCobaia = parseInt(numeroCobaia)

    todosValores.push({codigoCobaia, numeroCobaia});
    qtdValores++;
};

console.log(todosValores);

for (i=0; i < todosValores.length; i++) {
    switch(todosValores[i].codigoCobaia) {
        case 1:
            qtdCoelhos += todosValores[i].numeroCobaia
            break;
        case 2:
            qtdRatos += todosValores[i].numeroCobaia
            break;
        default:
            break;
    }
}
        
totalCobaias = qtdCoelhos + qtdRatos
percentualCoelhos = (qtdCoelhos/totalCobaias) * 100
percentualCoelhosFormatado = percentualCoelhos.toFixed(2);
percentualRatos = (qtdRatos/totalCobaias) * 100
percentualRatosFormatado = percentualRatos.toFixed(2);


console.log("O total de cobaias utilizadas: " + totalCobaias)
console.log("O total de coelhos utilizadas: " + qtdCoelhos)
console.log("O total de ratos utilizadas: " + qtdRatos)
console.log("O percentual de coelhos: " + percentualCoelhosFormatado + "%")
console.log("O percentual de ratos: " + percentualRatosFormatado + "%")

