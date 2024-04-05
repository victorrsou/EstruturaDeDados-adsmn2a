
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// para remover um valor do inicio do Array, podemos: 
for (var i=0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1];
}

// deslocamos sobrescrevendo todos os elementos pra esquerda
// entretanto o array numbers continua com tamanho (lenght) 10
// significa que a última posição está com valor undefined

console.log(numbers);

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined ]