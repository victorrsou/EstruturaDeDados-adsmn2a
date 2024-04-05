let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);

console.log(numbers.join(', '));

// -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// remove elemento final do array 
numbers.pop();
console.log(numbers.join(', '));

numbers.pop();
console.log(numbers.join(', '));