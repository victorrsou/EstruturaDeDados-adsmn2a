// Descritivo: favor codificar, em linguagem JavaScript, uma rotina que apresente na console, um calendário mostrando na
// console todos os dias e meses do ano de 2024, com base teórica da nossa "Aula 04 - Arrays".

class Meses {
    constructor(numMes, qtdDias) {
        this.numMes = numMes;
        this.qtdDias = qtdDias;
    }
}

// cadastro dos meses na classe 
const janeiro = new Meses(1, 31);
const fevereiro = new Meses(2, 29);
const marco = new Meses(3, 31);
const abril = new Meses(4, 30);
const maio = new Meses(5, 31);
const junho = new Meses(6, 30);
const julho = new Meses(7, 31);
const agosto = new Meses(8, 31);
const setembro = new Meses(9, 30);
const outubro = new Meses(10, 31);
const novembro = new Meses(11, 30);
const dezembro = new Meses(12, 31);

function exibirCalendario() {

    // exibir dias da semana 
    var diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    console.log(diasSemana.join(' '));

    var mesAtual = 1;

    for(i=0, ,i++) {

    }

    var arrayLinha1 = [1, 2, 3, 4, 5, 6, 7];
    var arrayLinha2 = [(arrayLinha1[0] + 7), (arrayLinha1[1] + 7), (arrayLinha1[2] + 7), (arrayLinha1[3] + 7), (arrayLinha1[4] + 7), (arrayLinha1[5] + 7), (arrayLinha1[6] + 7)];
    var arrayLinha3 = [(arrayLinha1[0] + 14), (arrayLinha1[1] + 14), (arrayLinha1[2] + 14), (arrayLinha1[3] + 14), (arrayLinha1[4] + 14), (arrayLinha1[5] + 14), (arrayLinha1[6] + 14)];
    var arrayLinha4 = [(arrayLinha1[0] + 21), (arrayLinha1[1] + 21), (arrayLinha1[2] + 21), (arrayLinha1[3] + 21), (arrayLinha1[4] + 21), (arrayLinha1[5] + 21), (arrayLinha1[6] + 21)];
    var arrayLinha5 = [(arrayLinha1[0] + 28), (arrayLinha1[1] + 28), (arrayLinha1[2] + 28), (arrayLinha1[3] + 28), (arrayLinha1[4] + 28), (arrayLinha1[5] + 28), (arrayLinha1[6] + 28)];
    var arrayLinha6 = [(arrayLinha1[0] + 35), (arrayLinha1[1] + 35), (arrayLinha1[2] + 35), (arrayLinha1[3] + 35), (arrayLinha1[4] + 35), (arrayLinha1[5] + 35), (arrayLinha1[6] + 35)];
    console.log(arrayLinha1.join(' '));
    console.log(arrayLinha2.join(' '))
    console.log(arrayLinha3.join(' '))
    console.log(arrayLinha4.join(' '))
    console.log(arrayLinha5.join(' '))
    console.log(arrayLinha6.join(' '))
};

exibirCalendario();