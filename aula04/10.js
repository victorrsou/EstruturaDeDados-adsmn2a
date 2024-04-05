function isEven(x) {
    // devolve true e x for multiplo de 2
    // console.log(x);
    return (x % 2 === 0) ? true : false;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.every(isEven);

numbers.some(isEven);
// O primeiro elemento da iteração é o numero 1; ele devolverá false

const myMap = numbers.map(isEven);

console.log(myMap);

// [
//     false, true,  false,
//     true,  false, true,
//     false, true,  false,
//     true,  false, true,
//     false, true,  false
//   ]