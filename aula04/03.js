let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

console.log(numbers);

console.log(numbers.join(',jsjs '));

// 0,jsjs 1,jsjs 2,jsjs 3,jsjs 4,jsjs 5,jsjs 6,jsjs 7,jsjs 8,jsjs 9,jsjs 10,jsjs 11,jsjs 12,jsjs 13