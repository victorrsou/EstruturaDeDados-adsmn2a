var matrizDiasDoMes = [];
var indiceInicio = 0;

while(indiceInicio < 31) {
    indiceInicio += 1;

    let qtdColunas = 7;
    if ((indiceInicio%qtdColunas) == 0) {
        matrizDiasDoMes.push("\n " + indiceInicio);
    } else {
        matrizDiasDoMes.push(indiceInicio);
    }

};

console.log(matrizDiasDoMes);