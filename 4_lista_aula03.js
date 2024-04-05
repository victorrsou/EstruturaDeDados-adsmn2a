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

var listaCodigo = [1, 2];

while(16 > qtdValores) {    
    codigoCobaia = readline.question(`${qtdValores}) Favor, digite o codigo da cobaia: `);
    numeroCobaia = readline.question("Agora digite o numero de cobaias neste experimento: ");
    todosValores.push({codigoCobaia, numeroCobaia});
    qtdValores++;
};

console.log(todosValores);

for (i = 0; i < todosValores; i++) {
    for(j = 0; j < listaCodigo.length; j++) {
        if(todosValores[i].codigoCobaia == listaCodigo[j]) {
            if(listaCodigo[j] == 1) {
                qtdCoelhos += parseInt(todosValores[i].numeroCobaia);
            } else {
                qtdRatos += parseInt(todosValores[i].numeroCobaia)
            }

        }
    }
}

totalCobaias = qtdCoelhos + qtdRatos
percentualCoelhos = qtdCoelhos/totalCobaias
percentualRatos = qtdRatos/totalCobaias

console.log("O total de cobaias utilizadas: " + totalCobaias)
console.log("O total de coelhos utilizadas: " + qtdCoelhos)
console.log("O total de ratos utilizadas: " + qtdRatos)
console.log("O percentual de coelhos: " + percentualCoelhos + "%")
console.log("O percentual de ratos: " + percentualRatos + "%")

