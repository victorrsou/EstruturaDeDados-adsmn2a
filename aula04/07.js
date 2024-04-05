let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// copiando todos os valores para outro Array
// diferentes de undefined do array original 

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

// remove a primeira posição manualmente e executa reIndex 
Array.prototype.removeFirstPosition = function() {
    for (var i=0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();

// apresetando o array numbers após a execução do método 
console.log(numbers)