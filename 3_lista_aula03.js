// 3) Refaça o exercício abaixo (agora em JavaScript), mas desta vez utilizando as estruturas de repetição,
// onde o programa deverá finalizar quando o usuário digitar 0, caso contrário ficará cadastrando os pedidos,
// agora vai poder acumular mais de um produto e ao final deverá ser dada a soma dos pedidos.
// O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Código Produto Preço Unitário (R$)
// 100 Cachorro quente R$ 1,70
// 101 Bauru Simples R$ 2,30
// 102 Bauru com ovo R$ 2,60
// 103 Hamburguer R$ 2,40
// 104 Cheeseburguer R$ 2,50
// 105 Refrigerante R$ 1,00

// Escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e
// mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final.

var readline = require('readline-sync')

var pedidos = []
codigoInserido = 1
qtdInserida = 1
valorFinal = 0

var listaProdutos = [
    {codigo: 100, nome: "Cachorro quente", preco: 1.7},
    {codigo: 101, nome: "Bauru Simples", preco: 2.3},
    {codigo: 102, nome: "Bauru com ovo", preco: 2.6},
    {codigo: 103, nome: "Hamburguer", preco: 2.4},
    {codigo: 104, nome: "Cheeseburger", preco: 2.5},
    {codigo: 105, nome: "Refrigerante", preco: 1}
];

while (codigoInserido != 0 && qtdInserida != 0){
    codigoInserido = readline.question("Favor, digite o codigo do item: ");
    qtdInserida = readline.question("Digite a quantidade do item: ");
    pedidos.push({codigoInserido, qtdInserida});
};

for (i=0; i < pedidos.length ;i++){
    for (j=0; j < listaProdutos.length; j++ ) {
        if (pedidos[i].codigoInserido == listaProdutos[j].codigo){
            valorFinal += (listaProdutos[j].preco * pedidos[i].qtdInserida)
        }
    }
}

console.log("O valor final é de: " + valorFinal)

