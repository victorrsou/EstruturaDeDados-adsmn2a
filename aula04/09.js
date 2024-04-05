const matrix3x3x3 = [];

for (var i = 0; i < 3; i++){
    matrix3x3x3[i] = []; // precisamos inicializar cada array
    for (var j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.table(matrix3x3x3)