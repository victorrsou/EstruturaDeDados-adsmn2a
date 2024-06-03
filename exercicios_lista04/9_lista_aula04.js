// Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
// O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for
// o jogador 1 ou jogador 2)
const readline = require('readline-sync');

function exibirTabuleiro(tabuleiro) {
    console.log("\n");
    for(i=0; i < 3; i++){
        console.log(tabuleiro[i].join(" "));
        console.log("\n");
    };
};

function jogarVelha() {

    var tabuleiro = [[null, null, null], [null, null, null], [null, null, null]];
    exibirTabuleiro(tabuleiro);

    for(i=0; i < 9; i++) {
        
        linhaJogada = parseInt(readline.question("Informe a posicao da linha da sua jogada: "));
        colunaJogada = parseInt(readline.question("Informe a posicao da coluna da sua jogada: "));
        
        simboloJogador = ["X", "O"];
        
        tabuleiro[linhaJogada][colunaJogada] = simboloJogador[0];
        exibirTabuleiro(tabuleiro);
    };
}

jogarVelha();

