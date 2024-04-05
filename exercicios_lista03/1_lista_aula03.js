// 1) Leia 20 valores reais e calcule seu somatório utilizando a instrução while.
var readline = require('readline-sync')

var qtdNumeros = 0
var somatorio = 0

while(qtdNumeros < 20) {
    var valorInserido = readline.question(`Digite o valor ${qtdNumeros + 1}: `);
    somatorio += parseInt(valorInserido),
    qtdNumeros += 1
}

console.log("A soma dos valores é igual a: " + somatorio)
